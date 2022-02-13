import { Box } from "@mui/system";
import React, {useEffect, useMemo} from "react";
import AuthenPage from "./components/Authen/index";
import Chat from "./components/Pages/chat";
import LeftSideToolbar from "./components/side/leftside";
import { useDispatch, useSelector } from 'react-redux';
import { GetUserInfo } from "./redux/action/user";
import {GetAllConversation} from './redux/action/conversation';

function App() {

  const {isLoggedIn} = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
      if(isLoggedIn){
        Promise.resolve(dispatch(GetUserInfo())).then(
          () => dispatch(GetAllConversation()));
      }
  }, [isLoggedIn])

  if (!isLoggedIn) {
    return <AuthenPage  />
  }
  else {
    return (
      <Box sx={{ display: 'grid', gridTemplateRows: '1fr 10fr 1fr',height:'100vh', gap: 1}}>
        <Box></Box> 
        <Box sx={{ display: 'grid', gap : 1.5  ,gridTemplateColumns: '0.6fr 13fr 1fr' }}>
          <LeftSideToolbar />
          <Chat />
          <Box></Box> 
        </Box>
      <Box></Box> 
    
    </Box>
    )
  }
}

export default App;
