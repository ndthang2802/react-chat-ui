import UserService from "../../services/API/user";
import { Refresh } from "./auth";

export function GetUserInfo(){
    return async dispatch => {
        try {
            var response = await UserService.getUserInfo();
            dispatch({ type : 'GET_USER_INFO_SUCCESS', payload : response });
        }
        catch(e) {
            if (e.message === 'TOKEN_EXPIRED') {
                dispatch(Refresh(GetUserInfo));
            }
        }
    }

}