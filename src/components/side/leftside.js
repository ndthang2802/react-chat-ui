import { Stack } from '@mui/material'
import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';  
import LanguageIcon from '@mui/icons-material/Language';
import { DEFAULT_ICON_COLOR, ICON_LEFT_SIDE_HOVER, LEFT_SIDE_BACKGROUND } from '../colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: { 
        backgroundColor : LEFT_SIDE_BACKGROUND, 
        borderRadius: '0 15px 15px 0',
    },
    icon : {
        fill: `${DEFAULT_ICON_COLOR+'!important' }`, 
        height: '3.5rem!important', 
        width : '3.5rem!important',
        '&:hover': {
            background: ICON_LEFT_SIDE_HOVER,
            cursor : 'pointer',
            animation : `$shake 400ms`
          },
    },
    "@keyframes shake" : {
        '0%' : { 
            transform :  'translate(1px, 1px)',
            rotate : '0deg' 
        },
        '10%' : { 
            transform: 'translate(-1px, -2px)',
            rotate : '-1deg' 
        },
        '20%' : { 
            transform: 'translate(-1px, 0px)',
            rotate : '1deg)' 
        },
        '30%' : { 
            transform: 'translate(1px, 2px)',
            rotate: '0deg' },
        '40%' : { 
            transform: 'translate(1px, -1px)', 
            rotate:'1deg' 
        },
        '50%' : { 
            transform: 'translate(-1px, 2px)', 
            rotate:'-1deg' 
        },
        '60%' : { 
            transform: 'translate(-1px, 1px)', 
            rotate:'0deg' 
        },
        '70%' : { 
            transform: 'translate(1px, 1px)', 
            rotate:'-1deg' },
        '80%' : { 
            transform: 'translate(-1px, -1px)', 
            rotate:'1deg' },
        '90%' : { 
            transform: 'translate(1px, 2px)', 
            rotate:'0deg)' 
        },
        '100%' : { 
            transform: 'translate(1px, -2px)', 
            rotate:'-1deg' 
        }
      }

})

export default function LeftSideToolbar() {
    const classes = useStyles()
    return (
        <Stack spacing={2} className={classes.root} px={1}>
            <AccountBoxIcon className={classes.icon} />
            <SettingsIcon  className={classes.icon}/>
            <LanguageIcon  className={classes.icon}/>
        </Stack>
    )
}
