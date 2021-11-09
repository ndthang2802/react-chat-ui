import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import {Box} from '@mui/material';
import TalkList from "./chat-components/talkList";
import { CONVERSATION_PANE } from "../colors";
import { makeStyles } from '@mui/styles';
import CreateTalk from "./chat-components/createTalk";
import ChatBoard from "./chat-components/chatBoard";
import Hub from "../../services/SignalR/signalrHub";
import { useDispatch,useSelector } from "react-redux";

const useStyles = makeStyles({
  root : {
    display: 'grid', 
    gap : '.9rem'  ,
    gridTemplateColumns: '3fr 10fr'
  },
  conversation_list : {
    backgroundColor : CONVERSATION_PANE,
    display : 'grid',
    gridTemplateRows : '1fr auto', 
  }

})
function Chat(){

  const classes = useStyles();
  const [connection, setConnection] = useState(HubConnection>(null));
  const [Choose, setChoose] = useState(''); // Which conversation is choosing for rendering in chat board
  const [Init, setInit] = useState(true);  // Flags for first auto connect to all User's conversation
  const [Connect, setConnect] = useState(true) // If Connect = true establishing signalR connection 
  const [Talks, setTalks] = useState([]);

  const  dispatch = useDispatch();

  // useEffect(()  => {
    
  // }, []);  // Get all user's conversation

  useEffect(() => {
    if (connection) { 
      connection
        .start()
        .then(() => {
          if(Init){
            for(var c in conversationList){
              Hub.AddToGroup(connection,c)
            }
            setInit(false)
          }

          connection.on("ReceiveMessage", (message) => {
            console.log("receimessage",message)
          });
          connection.on("send", data => {
            var _data = data.split(":");
            var x = {
              user: _data[0],
              message: _data[1]
            }
            
            setTalks((old)=>[...old,x]);
        });

        })
        .catch((error) => console.log(error));
    }

  }, [connection]);

  useEffect(()  => {  

    if(conversationList && Object.keys(conversationList).length && Object.getPrototypeOf(conversationList) === Object.prototype){
      for(var c in conversationList){
        setChoose(c);
        break;
      }
      if(Connect){
        const connect = Hub.EstablishConnection()
        setConnection(connect);
        setConnect(false); // set to false so that signalR does not establish again
      }
    }
  }, [conversationList]);


  

  return (
      <Box className = {classes.root}>
        <Box padding={2} className = {classes.conversation_list}>
          <TalkList list = {conversationList} setChoose = {setChoose} isChoosing = {Choose} />
          <CreateTalk />
        </Box>
        <ChatBoard connection={connection} conversation_id = {Choose} talks={Talks} />
      </Box>
        
  );
};

export default Chat;