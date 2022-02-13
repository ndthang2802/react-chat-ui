const initialState = {
    isLoggedIn : localStorage.getItem('token') ? true : localStorage.getItem('RefreshToken') ? true : false,
    User : {
        token: localStorage.getItem('token') ?  localStorage.getItem('token') : "",
        refreshToken: localStorage.getItem('RefreshToken') ? localStorage.getItem('RefreshToken') : "",
        info : {
            id: "",
            username: "",
            phoneNumber: "",
            displayName: ""
        }
    }
}


export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case  'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn : true,
                User : payload
            }
        case  'GET_USER_INFO_SUCCESS':
            return {
                ...state,
                User : {
                    ...state.User,
                    info : payload
                }
            }
        case  'REFRESH_TOKEN_SUCCESS':
            return {
                ...state,
                User : {
                    ...state.User,
                    token : payload.accessToken,
                    refreshToken: payload.refreshToken
                }
            }
        default :
            return state
    }
}