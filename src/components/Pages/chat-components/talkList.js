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
            list ? Object.keys(list).map((id) => {
                return (<React.Fragment key={id}>
                    <TalkListItem   id={id} name={list[id].name} creator={list[id].creator} users={list[id].usersAttend}  ischoose={id === isChoosing}  choose={()=>setChoose(id)} />
                </React.Fragment>)
            })
            : null
        }
    </Stack>
    )
}
