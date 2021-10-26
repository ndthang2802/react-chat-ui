import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import React from 'react'

export default function TalkListItem(props) {
    const {name,user,message} = props;
    return (
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {user}
              </Typography>
              {": "+message}
            </React.Fragment>
          }
        />
      </ListItem>
    )
}
