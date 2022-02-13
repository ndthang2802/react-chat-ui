import AuthenticationService from "../../services/API/authentication.api"


export function Login(data){
    return async function LoginThunk(dispatch){
        try {
            var response = await AuthenticationService.login(data);
            dispatch({ type : 'LOGIN_SUCCESS', payload : response });
        }
        catch(e) {
            //dispatch({ type : LOGIN_FAIL, payload : response });
        }
    }
}


export function Refresh(action){    
    return async function RefreshThunk(dispatch){
        try {
            var response = await AuthenticationService.TokenRefresh();
            dispatch({ type : 'REFRESH_TOKEN_SUCCESS', payload : response });
            dispatch(action());
        }
        catch(e) {
            //dispatch({ type : LOGIN_FAIL, payload : response });
        }
    }
}

export function Register(data){
    return async function RegisterThunk(dispatch) {
        try {
            var response = await AuthenticationService.Register(data)
            dispatch({type: 'REGISTER_SUCCESS',payload : response})
        }
        catch(e) {

        }
    }
}
