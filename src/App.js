import { Box } from "@mui/system";
import React, {useEffect} from "react";
import AuthenPage from "./components/Authen/login";
import Chat from "./components/Pages/chat";
import LeftSideToolbar from "./components/side/leftside";
import { useDispatch, useSelector } from 'react-redux';
import { GetUserInfo } from "./redux/action/user";
import {GetAllConversation} from './redux/action/conversation';

function App() {

  const {isLoggedIn} = useSelector(state => state.user);
  const {User} = useSelector(state => state.user);

  console.log(User);
  const {conversationList} = useSelector(state => state.conversation);
  console.log(conversationList);
  const dispatch = useDispatch ();
  useEffect(() => {
      if(isLoggedIn){
        dispatch(GetUserInfo());
        
      }
  }, [isLoggedIn])

  if (!isLoggedIn) {
    return <AuthenPage  />
  }
  else {
    return (
      <Box sx={{ display: 'grid', gridTemplateRows: '1fr 10fr 1fr',height:'100vh', gap: 1}}>
        <Box></Box> {/* add some component  */}
        <Box sx={{ display: 'grid', gap : 1.5  ,gridTemplateColumns: '0.6fr 13fr 1fr' }}>
          <LeftSideToolbar />
          <Chat />
          <Box></Box> {/* add some component  */}
        </Box>
      <Box></Box> {/* add some component  */}
    
    </Box>
    )
  }
}

export default App;
