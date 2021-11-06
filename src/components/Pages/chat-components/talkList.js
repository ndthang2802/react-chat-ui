import { Divider, Stack } from '@mui/material'
import React from 'react'
import TalkListItem from './talkListItem'
export default function TalkList(props) {
    const {list,setChoose,isChoosing} = props;
    
    return (
    <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={.1}
        padding= '.3rem 0 1rem 0'
        >
        {
            list.length ? list.map((talk,index) => {
                return (<React.Fragment>
                    <TalkListItem key={index+talk.id} id={talk.id} name={talk.name} creator={talk.creator} users={talk.usersAttend}  ischoose={talk.id === isChoosing}  choose={()=>setChoose(talk.id)} />
                </React.Fragment>)
            })
            : null
        }
    </Stack>
    )
}
