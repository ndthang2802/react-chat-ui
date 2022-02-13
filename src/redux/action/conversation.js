import ConversationService from "../../services/API/conversation"
import { Refresh } from "./auth";


export function GetAllConversation(){
    return async function GetAllConversationThunk(dispatch){
        try {
            var response = await ConversationService.get();
            dispatch({ type : 'GET_ALL_CONVERSATION_SUCCESS', payload : response });
        }
        catch(e) {
            if (e.message === 'TOKEN_EXPIRED') {
                dispatch(Refresh(GetAllConversation));
            }
        }
    }
}


export function CreateChatRoom(data){
    return async function CreateChatRoomThunk(dispatch) {
        try {
            var response = await ConversationService.createRoom(data);
            dispatch({type:'ROOM_CREATE_SUCCESS', payload:response})
        }
        catch(e){
            console.log(e)
        }
    }
}

export function JoinInChatRoom(data){
    return async function JoinInChatRoomThunk(dispatch){
        try {
            var response = await ConversationService.JoinInRoom(data);
            dispatch({type:'JOIN_ROOM_SUCCESS',payload: response})
        }
        catch(e)
        {
            console.log(e)
        }
    }
}