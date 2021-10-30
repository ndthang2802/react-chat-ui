import { FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import React from 'react'
import { Box } from '@mui/system';
import { DEFAULT_ICON_COLOR, MESSAGE_TEXT_COLOR } from '../../colors';
import { AccountCircle } from '@mui/icons-material';


  
export default function TalkInput() {
    
    return (
        <form style = {{padding:'10px'}} > 
            {/* <Box sx={{ display: 'grid', gridTemplateColumns: '5fr 3fr', gap: 2}}>
                <FormControl variant="standard">
                <InputLabel htmlFor="input-with-icon-adornment" style= {{color : `${MESSAGE_TEXT_COLOR}`}}>
                    Type message
                </InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <KeyboardAltOutlinedIcon  style={{ fill: '#f15131' , height: '2rem', width : '2rem' }} />
                        </InputAdornment>
                    }
                />
                </FormControl>
                <Box sx={{display:'flex', alignItems : 'center',flexDirection:'row', gap: 1}}>
                    <SendOutlinedIcon  color='primary' />
                    <MoreVertOutlinedIcon  color='primary' />
                    <MoreVertOutlinedIcon  color='primary' />
                </Box>
            </Box> */}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '80%' }}>
                <AccountCircle sx={{ fill: '#f15131' , height: '2rem', width : '2rem', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Type message" variant="standard" style={{width: '80%'}} 
                    inputProps={{style: {color : `${MESSAGE_TEXT_COLOR}`}}} 
                    InputLabelProps = {{style: {color : `${MESSAGE_TEXT_COLOR}`}}}
                />
                <Box sx={{display:'flex', alignItems : 'center',flexDirection:'row', gap: 1, marginLeft: '1rem'}}>
                    <SendOutlinedIcon  sx={{ fill: '#2ac27c' , height: '2rem', width : '2rem', mr: 1, my: 0.5 }} />
                    <MoreVertOutlinedIcon  color='primary' />
                    <MoreVertOutlinedIcon  color='primary' />
                </Box>
            </Box>
        </form>
    )
}
