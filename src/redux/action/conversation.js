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