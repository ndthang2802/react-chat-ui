import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import {Box} from '@mui/material';
import TalkList from "./chat-components/talkList";
import TalkInput from "./chat-components/talkInput";
import MessageList from "./chat-components/messageList";
import { CHAT_PANE, CHAT_PANE_MAIN, CONVERSATION_PANE, MESSAGE_TEXT_COLOR } from "../colors";
function Chat(){
  const [connection, setConnection] = useState(HubConnection>(null));
  const [inputText, setInputText] = useState("");

  const [groupName, setGroupName] = useState("");


//   useEffect(() => {
//     const connect = new HubConnectionBuilder()
//       .withUrl("https://localhost:5001/chatHub")
//       .withAutomaticReconnect()
//       .build();

//     setConnection(connect);
//   }, []);

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
  console.log(connection);
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
      <Box sx ={{display: 'grid', gap : 1.5  ,gridTemplateColumns: '3fr 10fr'}}>
        <Box padding={2} sx={{ backgroundColor : `${CONVERSATION_PANE}`}}>
          <TalkList/>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateRows: '1fr 10fr 1fr',height:'100%', gap : 1, backgroundColor : `${CHAT_PANE}`, color: `${MESSAGE_TEXT_COLOR}` }}>
          <Box sx={{backgroundColor : `${CHAT_PANE_MAIN}`}} >Title</Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: '5fr 1.8fr',height:'100%',gap: 1, }}>
            <Box padding={2} sx={{backgroundColor : `${CHAT_PANE_MAIN}`}}>
              <MessageList/>
            </Box >
            <Box sx={{backgroundColor : `${CHAT_PANE_MAIN}`}}>Detail</Box>
          </Box>
          <Box sx={{backgroundColor : `${CHAT_PANE_MAIN}`}}><TalkInput /></Box>
        </Box>
      </Box>
        
  );
};

export default Chat;