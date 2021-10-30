import { Avatar, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { MESSAGE_THEME_COLOR } from '../../colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[200],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default function MessageItem(props) {
    const {user,message,align} = props;
    
    return (
        <Box sx={{display:'flex', alignSelf: `${align}` ,flexDirection: 'column',gap: 1, maxWidth:'48%' }} >
            <Box sx={{display:'flex', flexDirection: 'row', justifyContent : 'space-between' }}>
                <Typography variant='subtitle1'><b>{user}</b></Typography>
                <Typography variant='subtitle2'>19:30&nbsp;31/10/2021</Typography>
            </Box>
            <Box sx={{display:'grid', gridTemplateColumns:'1fr 6fr', gap: 1 }} >
                <Avatar sx={{ bgcolor: deepPurple[500], height:'32px', width:'32px'  }}>H</Avatar>
                <Box style={{ display: 'flex', alignItems : 'center', paddingLeft : '.5em',borderRadius : '10px' , backgroundColor : `${MESSAGE_THEME_COLOR}`, }} >{message}</Box>
            </Box>
        </Box>
    )
}
