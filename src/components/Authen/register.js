import React,{useState} from "react";



function Register() {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Phone, setPhone] = useState('');
    const [DisplayName, setDisplayName] = useState('');


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
      <input value={Phone} onChange={(input) => {
          setPhone(input.target.value);
        }}
      />
      <input value={DisplayName} onChange={(input) => {
          setDisplayName(input.target.value);
        }}
      />
    </div>
  );
}

export default Register;
