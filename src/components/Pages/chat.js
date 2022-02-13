import { HubConnection } from "@microsoft/signalr";
import React, { useEffect, useState, useMemo } from "react";
import {Box} from '@mui/material';
import { CONVERSATION_PANE } from "../colors";
import { makeStyles } from '@mui/styles';


import { ChatBoard, CreateTalk, TalkList } from './chat-components'

import Hub from "../../services/SignalR/signalrHub";
import JoinInRoom from "./chat-components/JoinInChatRoom";

import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles({
  root : {
    display: 'grid', 
    gap : '.9rem'  ,
    gridTemplateColumns: '3fr 10fr'
  },
  conversation_list : {
    backgroundColor : CONVERSATION_PANE,
    display : 'grid',
    gridTemplateRows : '1fr auto auto', 
  }

})
function Chat(){

  const classes = useStyles();
  


  const [RoomIds, setRoomIds] = useState([]);
  const [Choose, setChoose] = useState('');
  const [Loading,setLoading] = useState(true)

  const {conversationList} = useSelector(state => state.conversation);

  useEffect (()=> {
    var ids = Object.keys(conversationList)
    if (ids.length){
      setRoomIds(ids)
      setChoose(ids[0])
      setLoading(false)
    }

  },[conversationList])


  const [connection, setConnection] = useState(useState<null | HubConnection>(null));
  const [Talks, setTalks] = useState([]);

  const dispatch = useDispatch();

  
  useMemo(()=>{
    if (Loading === false) {
      setConnection(Hub.EstablishConnection())
    }
  },[Loading])
  

  useEffect(()=> {
    if (connection) {
      connection
        .start()
        .then(() => {
          for(var id in RoomIds){
            Hub.AddToGroup(connection,id)
         }
          connection.on("Send", (message) => {
            console.log("receimessage: ",message)
          });
          connection.on("AddS", (message) => {
            console.log("receimessage: ",message)
          });
        })
        .catch((error) => console.log(error));
    }
  },[connection])

  // useEffect(async () => {
  //   if (connection) { 
  //     connection
  //       .start()
  //       .then(() => {
  //         if(Init){
  //           for(var c in conversationList){
  //             await Hub.AddToGroup(connection,c)
  //           }
  //           setInit(false)
  //         }

  //         connection.on("ReceiveMessage", (message) => {
  //           console.log("receimessage",message)
  //         });
  //         connection.on("send", data => {
  //           var _data = data.split(":");
  //           var x = {
  //             user: _data[0],
  //             message: _data[1]
  //           }
            
  //           setTalks((old)=>[...old,x]);
  //       });

  //       })
  //       .catch((error) => console.log(error));
  //   }

  // }, [connection]);




  

  return (
      <Box className = {classes.root}>
        <Box padding={2} className = {classes.conversation_list}>
          <TalkList  setChoose = {setChoose} isChoosing = {Choose} />
          <JoinInRoom />
          <CreateTalk />
        </Box>
        <ChatBoard connection={connection} conversation_id = {Choose} talks={Talks} />
      </Box>
        
  );
};

export default Chat;