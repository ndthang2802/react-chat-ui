import { Box } from '@mui/system';
import React,{useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Grow, TextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DEFAULT_TEXT_COLOR } from '../../colors';
import { JoinInChatRoom } from '../../../redux/action/conversation';
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
export default function JoinInRoom() {
    const classes = useStyles();    
    const [checked, setChecked] = useState(false);
    const [roomId,setRoomId] = useState('');
    const dispatch = useDispatch();
    const join_chat_room = ()=> {
        if (roomId){
            const data = {'idRoom': roomId,};
            dispatch(JoinInChatRoom(data));
        }
        setRoomId('')
    }
    return (
        <Box className={classes.root}>
            <Tooltip title='Join in a room'> 
                <AddCircleOutlineIcon className={classes.icon} onClick={()=>setChecked(!checked)} />
            </Tooltip>
            <Box className={classes.textfield_toggle}>
                <Grow in={checked}> 
                    <TextField label="Enter a room id" color="secondary" 
                    value={roomId}
                    focused inputProps = {{style:{color : DEFAULT_TEXT_COLOR, fontWeight : 'bold'}}}
                    onChange={(input) => { setRoomId(input.target.value);}}  />
                </Grow>
                <Grow in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}>
                    <Button variant="contained" onClick={join_chat_room} >Ok</Button>
                </Grow>
            </Box>
        </Box>
    )
}
