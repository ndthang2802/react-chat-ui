import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import {Box} from '@mui/material';
import TalkList from "./chat-components/talkList";
import { CONVERSATION_PANE } from "../colors";
import { makeStyles } from '@mui/styles';
import CreateTalk from "./chat-components/createTalk";
import conversation from "../../services/API/conversation";
import ChatBoard from "./chat-components/chatBoard";
import Hub from "../../services/SignalR/signalrHub";
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
  const [inputText, setInputText] = useState("");
  const [groupName, setGroupName] = useState("");
  const [ConversationList, setConversationList] = useState("");
  const [Choose, setChoose] = useState('');



  useEffect(async ()  => {
    var res = await conversation.get();
    setConversationList(res);

    setConnection(Hub.EstablishConnection())
  
  }, []);

  useEffect(async ()  => {
    if(ConversationList.length){
      setChoose(ConversationList[0].id);
    }
  }, [ConversationList]);

// const EstablishConnection = () => {

//     const connect = new HubConnectionBuilder()
//       .withUrl("https://localhost:5001/chatHub",{accessTokenFactory : ()=>localStorage.getItem('Token') })
//       .build();

//     setConnection(connect);
// }

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          connection.on("ReceiveMessage", (message) => {
            console.log("receimessage",message)
          });
          connection.on("send", data => {
            console.log("group: ",data);
        });

        })
        .catch((error) => console.log(error));
    }
  }, [connection]);

  // const sendMessage = async () => {
  //   if (connection) await connection.invoke("SendMessageToGroup", inputText,'group1');
  //   setInputText("");
  // };

  // const addToGroup = async () => {
  //   if (connection) await connection.invoke("AddToGroup", groupName);
  //   setGroupName("");
  // };
  console.log(ConversationList);
  return (
    // <>
    // <button onClick={EstablishConnection} type="primary">
    //     connect
    //   </button>
    //   <input
    //     value={inputText}
    //     onChange={(input) => {
    //       setInputText(input.target.value);
    //     }}
    //   />
    //   <button onClick={sendMessage} type="primary">
    //     Send
    //   </button>
    //   <button onClick={addToGroup} type="primary">
    //     Create group chat
    //   </button>
    //   <input
    //     value={groupName}
    //     onChange={(input) => {
    //       setGroupName(input.target.value);
    //     }}
    //   />
    // </>
      <Box className = {classes.root}>
        <Box padding={2} className = {classes.conversation_list}>
          <TalkList list = {ConversationList} setChoose = {setChoose} isChoosing = {Choose} />
          <CreateTalk />
        </Box>
        <ChatBoard connection={connection} conversation_id = {Choose} />
      </Box>
        
  );
};

export default Chat;