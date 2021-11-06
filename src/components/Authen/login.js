import { Box} from "@mui/system";
import React,{useState} from "react";
import Authentication from '../../services/API/athentication.api'
import { makeStyles } from '@mui/styles';
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import { AUTHEN_FORM_COLOR, AUTHEN_FORM_TEXT_COLOR, MESSAGE_TEXT_COLOR } from "../colors";
import { Button, TextField, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
const useStyles = makeStyles({ 
  root : {
    position : 'absolute',
    width : '50%',
    height : 'auto',
    minHeight : '35%',
    top : '45%',
    left : '45%',
    transform : 'translate(-45%, -45%)',
    display : "grid",
    gridTemplateRows : "1fr 5fr 1fr",
    padding : '1rem',
    backgroundColor : AUTHEN_FORM_COLOR,
    borderRadius : '10px',
    color : AUTHEN_FORM_TEXT_COLOR,
  },
  header : {
    display: "flex",
    flexDirection : 'row',
    gap : '1rem',
  },
  main : {
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    gap : '1rem',
    
  },
  footer: {
    display:"flex",
    justifyContent : 'flex-end',
  },
  icon : {
    fill: '#ecedee!important',
    height: '3.2rem!important',
    width: '3.2rem!important',
  }
})

function Login(props) {

    const {loginState} = props;
    const classes = useStyles()
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Mode, setMode] = useState('login');


    const handleLogin = async () => {
      const data = {'username': Username,'password': Password};
      try {
        await Authentication.login(data);
        if(localStorage.getItem('Token') !== 'undefined' && localStorage.getItem('Token') !== null){
          loginState(true);
        }
        //loginState(true);
      }
      catch (e) {
        console.log(e);
      }
    }

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box>{Mode === 'login' ? <LoginIcon className={classes.icon} /> : <CreateIcon  className={classes.icon} />}</Box>
        <Box>{Mode === 'login' ? <Typography variant='h4'>Login</Typography> : <Typography variant='h6'>Register</Typography>}</Box>
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
    </Box>
  );
}

export default Login;
