import { Typography } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import React from 'react'
import { DEFAULT_ICON_COLOR, CONVERSATION_LAST_USER_TEXT_NAME, CONVERSATION_LAST_USER_TEXT_UNREAD, CONVERSATION_NAME, CONVERSATION_CHOOSING_DISPLAY } from '../../colors';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display : 'grid',
    gridTemplateRows: 'auto auto',
    padding : '.5rem',
    '&:hover': {
      background: CONVERSATION_CHOOSING_DISPLAY,
      cursor : 'pointer'
    },
  },
  aboveBox : {
    display : 'grid', 
    gridTemplateColumns: 'auto auto 1fr', 
    columnGap : 5
  },
  focusMaker : {
    width : '.7rem', 
    borderTopRightRadius: '6px',
    borderBottomRightRadius : '6px', 
    backgroundColor: (ischoose) => ischoose ? '#0094ff' : null,
  },
  groupName : {
    color : (ischoose)=> ischoose ? '#0094ff' : CONVERSATION_NAME
  },
});

export default function TalkListItem(props) {
    const {id,name,creator,users, ischoose, choose} = props;
    const classes = useStyles(ischoose);
    return (
      <Box className = {classes.root} onClick = {choose}  >
        <Box className= {classes.aboveBox} >
            <Box className = {classes.focusMaker}></Box>
            <Box><ForumIcon  style={{ fill: `${DEFAULT_ICON_COLOR}` , height: '3.5rem', width : '3.5rem' }} /></Box>
            <Box><Typography variant='h6' className={classes.groupName}>{name}</Typography></Box>
        </Box>
        <Box mt={2}>
          <Typography style= {{color : `${CONVERSATION_LAST_USER_TEXT_NAME}`,display: 'inline-block' }} >{'Conversation is not saved'}&nbsp;&nbsp;</Typography>
          <Typography style= {{color : `${CONVERSATION_LAST_USER_TEXT_UNREAD}`,display: 'inline-block'}} >{'!!!!'}</Typography></Box>
      </Box>
    )
}
