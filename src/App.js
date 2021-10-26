import React, {useState,useEffect} from "react";
import Login from "./components/Authen/login";
import Chat from "./components/Pages/chat";
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
    return <Chat />
  }
}

export default App;
