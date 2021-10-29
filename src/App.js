import { Box } from "@mui/system";
import React, {useState,useEffect} from "react";
import Login from "./components/Authen/login";
import Chat from "./components/Pages/chat";
import { APP_THEME } from "./components/Pages/colors";
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
      <Box sx={{backgroundColor : `${APP_THEME}`}}>
        <Chat />
      </Box>
    )
  }
}

export default App;
