import React,{useState} from "react";
import Authentication from '../../services/API/athentication.api'


function Login() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');


    const handleLogin = () => {
      const data = {'username': Username,'password': Password};
      try {
        Authentication.login(data);
      }
      catch (e) {
        console.log(e);
      }
    }

  return (
    <div className="Login">
      <input value={Username} onChange={(input) => {
          setUsername(input.target.value);
        }}
      />
      <input value={Password} onChange={(input) => {
          setPassword(input.target.value);
        }}
      />
      <button onClick={handleLogin} >login</button>
    </div>
  );
}

export default Login;
