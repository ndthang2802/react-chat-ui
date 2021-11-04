import { Divider, Stack } from '@mui/material'
import React, {useState, useEffect} from 'react'
import TalkListItem from './talkListItem'
export default function TalkList(props) {
    const [Choose, setChoose] = useState('');
    const {list} = props;
    // var talks = [
    //     {
    //         id : '1',
    //         name: 'Group1',
    //         user: 'Test1',
    //         message: 'Last message in talk'
    //     },
    //     {
    //         id : '2',
    //         name: 'Group2',
    //         user: 'Test2',
    //         message: 'Last message in talk'
    //     },
    //     {
    //         id : '3',
    //         name: 'Group3',
    //         user: 'Test3',
    //         message: 'Last message in talk'
    //     }
    // ]

    useEffect(() => {
        if (list.length){
            setChoose(list[0].id)
        }
    }, [])
    return (
    <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={.1}
        padding= '.3rem 0 1rem 0'
        >
        {
            list.map((talk,index) => {
                return (<React.Fragment>
                    <TalkListItem key={index} id={talk.id} name={talk.name} creator={talk.creator} users={talk.usersAttend}  ischoose={talk.id === Choose}  choose={()=>setChoose(talk.id)} />
                    
                </React.Fragment>)
            })
        }
    </Stack>
    )
}
