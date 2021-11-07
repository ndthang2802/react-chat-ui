import { Box } from '@mui/system'
import React from 'react'
import MessageItem from './messageItem'
export default function MessageList(props) {
    const {talks} = props;
    return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection:'column', gap : 5 }}>
        {
           talks.length ?  talks.map((talk,index) => {
                return  (<MessageItem key={index} user={talk.user} message={talk.message} align={ talk.user=== 'testuser' ? 'end' : 'start'} />)
            })

            : null
           
        }
       
    </Box>
    )
}
