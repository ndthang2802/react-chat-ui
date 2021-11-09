import { Divider, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import TalkListItem from './talkListItem'
export default function TalkList(props) {
    const { setChoose, isChoosing } = props;
    const {conversationList} = useSelector(state => state.conversation);

    return (
    <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={.1}
        padding= '.3rem 0 1rem 0'
        >
        {
            conversationList ? Object.keys(conversationList).map((id) => {
                return (<React.Fragment key={id}>
                    <TalkListItem   id={id} 
                                    name={conversationList[id].name} 
                                    creator={conversationList[id].creator} 
                                    users={conversationList[id].usersAttend}  
                                    ischoose={id === isChoosing}  
                                    choose={()=>setChoose(id)} />
                </React.Fragment>)
            })
            : null
        }
    </Stack>
    )
}
