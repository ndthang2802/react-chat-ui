import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import React from 'react'
import { DEFAULT_ICON_COLOR, CONVERSATION_LAST_USER_TEXT_NAME, CONVERSATION_LAST_USER_TEXT_UNREAD, CONVERSATION_NAME } from '../colors';
import { Box } from '@mui/system';

export default function TalkListItem(props) {
    const {name,user,message} = props;
    return (
      //   <ListItem alignItems="flex-start">
      //   <ListItemAvatar>
      //       <ForumIcon fontSize='large' style={{ fill: `${CONVERSATION_DEFAULT_ICON}` }} />
      //   </ListItemAvatar>
      //   <ListItemText> {name} </ListItemText>
      // </ListItem>
      <Box sx={{display : 'grid', gridTemplateRow: '3fr 1fr'}}>
        <Box sx={{display : 'grid', gridTemplateColumns: 'auto 1fr', gap : 2}} >
            <Box><ForumIcon style={{ fill: `${DEFAULT_ICON_COLOR}` , height: '3rem', width : '3rem' }} /></Box>
            <Box><Typography style= {{color : `${CONVERSATION_NAME}`}}>{name}</Typography></Box>
        </Box>
        <Box>
          <Typography style= {{color : `${CONVERSATION_LAST_USER_TEXT_NAME}`,display: 'inline-block' }} >{user+':'}&nbsp;&nbsp;</Typography>
          <Typography style= {{color : `${CONVERSATION_LAST_USER_TEXT_UNREAD}`,display: 'inline-block'}} >{message}</Typography></Box>
      </Box>
    )
}
