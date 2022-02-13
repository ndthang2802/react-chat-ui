import { Box } from '@mui/system';
import React, { useState } from 'react'
import RegisterPane from './register';
import LoginPane from './login'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Button } from "@mui/material";
import { useStyles } from './style';
export default function AuthenPage() {

    const classes = useStyles();
    const [mode, setmode ] = useState('login');


    const registerMode =() => {
        setmode('register')
    }
    const loginMode = () => {
        setmode('login')
    }

  return (
    <Box className={classes.root}>
        <Box className={classes.footer}>
            {
            mode === 'login' ?
        
                <Button variant="contained" endIcon={<SendOutlinedIcon />} onClick={registerMode}>
                    Register
                </Button>
    
            :
                <Button variant="contained" endIcon={<SendOutlinedIcon />} onClick={loginMode}>
                    Login
                </Button>
            }
        </Box>
        <Box className={classes.body} >{mode === 'login' ? <LoginPane/> : <RegisterPane/>}</Box>
    </Box>
  )
}
