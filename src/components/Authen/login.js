import { Box} from "@mui/system";
import React,{useState} from "react";
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { MESSAGE_TEXT_COLOR } from "../colors";
import { Button, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useDispatch } from 'react-redux';
import { Login } from '../../redux/action/auth';
import { useStyles } from "./style";

function LoginPane() {

    const classes = useStyles();
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleLogin = () => {
      const data = {'username': Username,'password': Password};
      dispatch(Login(data));
    }

  return (
    <>
      <Box className={classes.header}>
        <Box><LoginIcon className={classes.icon} /></Box>
        <Box><Typography variant='h4'>Login</Typography></Box>
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
      </Box>
        <Box className={classes.footer} px={5}>
          <Button variant="contained" endIcon={<SendOutlinedIcon />} onClick={handleLogin}>
            Send
          </Button>
        </Box>
    </>
  );
}

export default LoginPane;
