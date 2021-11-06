import { Box } from '@mui/system';
import React, {useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import TalkInput from './talkInput';
import MessageList from './messageList';
import { CHAT_PANE, CHAT_PANE_MAIN, MESSAGE_TEXT_COLOR } from '../../colors';
import Hub from '../../../services/SignalR/signalrHub';
const useStyles = makeStyles({
  chat_pane_background : {
    backgroundColor : CHAT_PANE_MAIN
  },
  chat_board : {
    display: 'grid', 
    gridTemplateRows: '1fr 10fr 1fr',
    height:'100%', 
    gap : '.6rem', 
    backgroundColor : CHAT_PANE, 
    color: MESSAGE_TEXT_COLOR
  },
  message_board : {
    display: 'grid', 
    gridTemplateColumns: '5fr 1.8fr',
    height:'100%',
    gap: '.6rem',
  }

})

export default function ChatBoard(props) {
    const classes = useStyles();

    const {connection,conversation_id} = props;


    useEffect(async () => {
      await Hub.AddToGroup(connection,conversation_id)
    }, [conversation_id])


    return (
        <Box className = {classes.chat_board}>
          <Box className = {classes.chat_pane_background} >Title</Box>
          <Box className={classes.message_board}>
            <Box padding={2} className = {classes.chat_pane_background}>
              <MessageList/>
            </Box >
            <Box className = {classes.chat_pane_background}>Detail</Box>
          </Box>
          <Box className = {classes.chat_pane_background}><TalkInput connection = {connection} /></Box>
        </Box>
    )
}
