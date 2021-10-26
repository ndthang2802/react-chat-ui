import { Divider, List } from '@mui/material'
import React from 'react'
import TalkListItem from './talkListItem'
export default function TalkList() {
    var talks = [
        {
            name: 'Group1',
            user: 'Test1',
            message: 'Last message in talk'
        },
        {
            name: 'Group2',
            user: 'Test2',
            message: 'Last message in talk'
        },{
            name: 'Group3',
            user: 'Test3',
            message: 'Last message in talk'
        }
    ]
    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
            talks.map((talk,index) => {
                return (<React.Fragment>
                    <TalkListItem key={index} name={talk.name} user={talk.user} message={talk.message} />
                    <Divider variant="inset" component="li" />
                </React.Fragment>)
            })
        }
       
    </List>
    )
}
