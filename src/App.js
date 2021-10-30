import { Box } from "@mui/system";
import React, {useState,useEffect} from "react";
import Login from "./components/Authen/login";
import Chat from "./components/Pages/chat";
import LeftSideToolbar from "./components/side/leftside";
function App() {

  const [Token, setToken] = useState('');

  useEffect(() => {
    if(localStorage.getItem('Token') !== 'undefined'){
      setToken(localStorage.getItem('Token'))
    }
  }, [])
  if (!Token) {
    return <Login />
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
