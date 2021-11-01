import { Box } from '@mui/system';
import React,{useState} from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Grow, TextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DEFAULT_TEXT_COLOR } from '../../colors';


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
    return (
        <Box className={classes.root}>
            <Tooltip title='Create a chat'> 
                <AddCircleOutlineIcon className={classes.icon} onClick={()=>setChecked(!checked)} />
            </Tooltip>
            <Box className={classes.textfield_toggle}>
                <Grow in={checked}> 
                    <TextField label="Enter a name" color="secondary" focused inputProps = {{style:{color : DEFAULT_TEXT_COLOR, fontWeight : 'bold'}}} />
                </Grow>
                <Grow in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}>
                    <Button variant="contained">Ok</Button>
                </Grow>
            </Box>
        </Box>
    )
}
