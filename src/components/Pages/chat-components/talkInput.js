import { TextField } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import React,{useState} from 'react'
import { Box } from '@mui/system';
import { MESSAGE_TEXT_COLOR } from '../../colors';
import { AccountCircle } from '@mui/icons-material';

import Hub from '../../../services/SignalR/signalrHub';
  
export default function TalkInput(props) {
    const {connection,conversation_id} = props;
    const [Message, setMessage] = useState('');

    const SendMessage = async ()=> {
        if(Message)
            await Hub.SendMessage(connection,Message,conversation_id);
        setMessage('');
    }

    return (
        <form style = {{padding:'10px'}} > 
            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '80%' }}>
                <AccountCircle sx={{ fill: '#f15131' , height: '2rem', width : '2rem', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Type message" variant="standard" style={{width: '80%'}} 
                    inputProps={{style: {color : `${MESSAGE_TEXT_COLOR}`}}} 
                    InputLabelProps = {{style: {color : `${MESSAGE_TEXT_COLOR}`}}}
                    onChange={(input)=>setMessage(input.target.value)}
                    value={Message || ''}
                />
                <Box sx={{display:'flex', alignItems : 'center',flexDirection:'row', gap: 1, marginLeft: '1rem'}}>
                    <SendOutlinedIcon  sx={{ fill: '#2ac27c' , height: '2rem', width : '2rem', mr: 1, my: 0.5 }} onClick={SendMessage}  />
                    <MoreVertOutlinedIcon  color='primary' />
                    <MoreVertOutlinedIcon  color='primary' />
                </Box>
            </Box>
        </form>
    )
}
