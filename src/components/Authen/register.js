import React,{useState} from "react";
import { Box} from "@mui/system";
import CreateIcon from '@mui/icons-material/Create';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { MESSAGE_TEXT_COLOR } from "../colors";
import { Button, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { useStyles } from "./style";
import { Register } from "../../redux/action/auth";

function RegisterPane() {

    const [Username, setUsername] = useState('');
    const [Password_confirm, setPasswordConfirm] = useState('');
    const [Password, setPassword] = useState('');
    const [Phone, setPhone] = useState('');
    const [DisplayName, setDisplayName] = useState('');
    const classes = useStyles()


    const dispatch = useDispatch();



    const handleRegister = () => {
      const data = {'username': Username,'password': Password, 'phoneNumber' : Phone , 'displayname' : DisplayName};
      dispatch(Register(data));
    }

  return (
    <>
    <Box className={classes.header}>
      <Box><CreateIcon  className={classes.icon} /></Box>
      <Box><Typography variant='h6'>Register</Typography></Box>
    </Box>
    <Box className={classes.main} pl={3} mt={2}>
      <Box>
        <AccountCircle sx={{ fill: '#f15131' , height: '3.5rem', width : '3.5rem', mr: 4, my: 0.5 }} />
        <TextField size='medium' id="username"  value={Username} label="Username" variant="standard" style={{width: '80%'}} 
            inputProps={{style: {color : `${MESSAGE_TEXT_COLOR}`}}} 
            InputLabelProps = {{style: {color : `${MESSAGE_TEXT_COLOR}`}}}
            onChange={(input) => { setUsername(input.target.value);}}
        />
      </Box>
      <Box>
        <VpnKeyIcon sx={{ fill: '#f15131' , height: '3.5rem', width : '3.5rem', mr: 4, my: 0.5 }} />
        <TextField type='password' size='medium' value={Password} id="password" label="Password" variant="standard" style={{width: '80%'}} 
            inputProps={{style: {color : `${MESSAGE_TEXT_COLOR}`}}} 
            InputLabelProps = {{style: {color : `${MESSAGE_TEXT_COLOR}`}}}
            onChange={(input) => { setPassword(input.target.value);}}
        />
      </Box>
      <Box>
        <VpnKeyIcon sx={{ fill: '#f15131' , height: '3.5rem', width : '3.5rem', mr: 4, my: 0.5 }} />
        <TextField type='password' size='medium' value={Password_confirm} id="password_confirm" label="Password confirm" variant="standard" style={{width: '80%'}} 
            inputProps={{style: {color : `${MESSAGE_TEXT_COLOR}`}}} 
            InputLabelProps = {{style: {color : `${MESSAGE_TEXT_COLOR}`}}}
            onChange={(input) => { setPasswordConfirm(input.target.value);}}
        />
      </Box>
      <Box>
        <AccountCircle sx={{ fill: '#f15131' , height: '3.5rem', width : '3.5rem', mr: 4, my: 0.5 }} />
        <TextField size='medium' id="phone"  value={Phone} label="Phone" variant="standard" style={{width: '80%'}} 
            inputProps={{style: {color : `${MESSAGE_TEXT_COLOR}`}}} 
            InputLabelProps = {{style: {color : `${MESSAGE_TEXT_COLOR}`}}}
            onChange={(input) => { setPhone(input.target.value);}}
        />
      </Box>
      <Box>
        <AccountCircle sx={{ fill: '#f15131' , height: '3.5rem', width : '3.5rem', mr: 4, my: 0.5 }} />
        <TextField size='medium' id="displayName"  value={DisplayName} label="DisplayName" variant="standard" style={{width: '80%'}} 
            inputProps={{style: {color : `${MESSAGE_TEXT_COLOR}`}}} 
            InputLabelProps = {{style: {color : `${MESSAGE_TEXT_COLOR}`}}}
            onChange={(input) => { setDisplayName(input.target.value);}}
        />
      </Box>
    </Box>
      <Box className={classes.footer} px={5}>
      <Button variant="contained" endIcon={<SendOutlinedIcon />} onClick={handleRegister} >
        Send
      </Button>
      </Box>
    </>
  );
}

export default RegisterPane;
