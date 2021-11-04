import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import {Box} from '@mui/material';
import TalkList from "./chat-components/talkList";
import TalkInput from "./chat-components/talkInput";
import MessageList from "./chat-components/messageList";
import { CHAT_PANE, CHAT_PANE_MAIN, CONVERSATION_PANE, MESSAGE_TEXT_COLOR } from "../colors";
import { makeStyles } from '@mui/styles';
import CreateTalk from "./chat-components/createTalk";
import conversation from "../../services/API/conversation";

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
  },
  chat_pane_background : {
    backgroundColor : CHAT_PANE_MAIN
  },
  chat_board : {
    display: 'grid', 
    gridTemplateRows: '1fr 10fr 1fr',
    height:'100%', 
    gap : '.6rem', 
    backgroundColor : CHAT_PANE, 
    color: MESSAGE_TEXT_COLOR
  },
  message_board : {
    display: 'grid', 
    gridTemplateColumns: '5fr 1.8fr',
    height:'100%',
    gap: '.6rem',
  }

})
function Chat(){

  const classes = useStyles();
  const [connection, setConnection] = useState(HubConnection>(null));
  const [inputText, setInputText] = useState("");
  const [groupName, setGroupName] = useState("");
  const [ConversationList, setConversationList] = useState("");


  useEffect(async ()  => {
    var res = await conversation.get();
    setConversationList(res);
  }, []);

const EstablishConnection = () => {

    const connect = new HubConnectionBuilder()
      .withUrl("https://localhost:5001/chatHub",{accessTokenFactory : ()=>localStorage.getItem('Token') })
      .build();

    setConnection(connect);
}

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

  const sendMessage = async () => {
    if (connection) await connection.invoke("SendMessageToGroup", inputText,'group1');
    setInputText("");
  };

  const addToGroup = async () => {
    if (connection) await connection.invoke("AddToGroup", groupName);
    setGroupName("");
  };
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
          <TalkList list = {ConversationList} />
          <CreateTalk />
        </Box>
        <Box className = {classes.chat_board}>
          <Box className = {classes.chat_pane_background} >Title</Box>
          <Box className={classes.message_board}>
            <Box padding={2} className = {classes.chat_pane_background}>
              <MessageList/>
            </Box >
            <Box className = {classes.chat_pane_background}>Detail</Box>
          </Box>
          <Box className = {classes.chat_pane_background}><TalkInput /></Box>
        </Box>
      </Box>
        
  );
};

export default Chat;