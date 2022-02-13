import { Avatar, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { MESSAGE_THEME_COLOR } from '../../colors';

export default function MessageItem(props) {
    const {user,message,align} = props;
    
    return (
        <Box sx={{display:'flex', alignSelf: `${align}` ,flexDirection: 'column',gap: 1, maxWidth:'48%' }} >
            <Box sx={{display:'flex', flexDirection: 'row', justifyContent : 'space-between' }}>
                <Typography variant='subtitle1'><b>{user}</b></Typography>
            </Box>
            <Box sx={{display:'grid', gridTemplateColumns:'1fr 6fr', gap: 1 }} >
                <Avatar sx={{ bgcolor: deepPurple[500], height:'32px', width:'32px'  }}>H</Avatar>
                <Box style={{ display: 'flex', alignItems : 'center', paddingLeft : '.5em',borderRadius : '10px' , backgroundColor : `${MESSAGE_THEME_COLOR}`, }} >{message}</Box>
            </Box>
        </Box>
    )
}
