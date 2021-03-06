import { Box } from '@mui/system';
import React,{useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Grow, TextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DEFAULT_TEXT_COLOR } from '../../colors';
import { CreateChatRoom } from '../../../redux/action/conversation';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({ 
    root : {
        display : 'flex',
        flexDirection : 'row',
        gap : '.3rem',
    },
    textfield_toggle : {
        display : 'flex',
        flexDirection : 'row',
        gap : '.3rem'
    },
    text_field : {
        color : DEFAULT_TEXT_COLOR
    },
    icon : {
        fill: '#2ac27c!important',
        height : '3.5rem!important',
        width : '3.5rem!important',
        '&:hover' : {
            cursor : 'pointer',

        }
    }

})
export default function CreateTalk() {
    const classes = useStyles();    
    const [checked, setChecked] = useState(false);
    const [roomName,setRoomName] = useState('');
    const dispatch = useDispatch();
    const create_chat_room = ()=> {
        if (roomName){
            const data = {'name': roomName,};
            dispatch(CreateChatRoom(data));
        }
        setRoomName('')
    }
    return (
        <Box className={classes.root}>
            <Tooltip title='Create a room'> 
                <AddCircleOutlineIcon className={classes.icon} onClick={()=>setChecked(!checked)} />
            </Tooltip>
            <Box className={classes.textfield_toggle}>
                <Grow in={checked}> 
                    <TextField label="Enter a name" color="secondary" 
                    value={roomName}
                    focused inputProps = {{style:{color : DEFAULT_TEXT_COLOR, fontWeight : 'bold'}}}
                    onChange={(input) => { setRoomName(input.target.value);}}  />
                </Grow>
                <Grow in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}>
                    <Button variant="contained" onClick={create_chat_room} >Ok</Button>
                </Grow>
            </Box>
        </Box>
    )
}
