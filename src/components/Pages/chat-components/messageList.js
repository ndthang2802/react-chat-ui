import { Box } from '@mui/system'
import React from 'react'
import MessageItem from './messageItem'
export default function MessageList() {
    var talks = [
        {
            user: 'Test1',
            message: 'User1 say something'
        },
        {
            user: 'Test2',
            message: 'User2 rep something'
        },{
            user: 'Test3',
            message: 'User3 say something'
        }
    ]
    return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection:'column', gap : 5 }}>
        {
            talks.map((talk,index) => {
                return  (<MessageItem key={index} user={talk.user} message={talk.message} align={ talk.user=== 'Test1' ? 'end' : 'start'} />)
            })
        }
       
    </Box>
    )
}
