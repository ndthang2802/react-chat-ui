const InitialState = {
    conversationList : {}
}


export  const conversationReducer = (state = InitialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'GET_ALL_CONVERSATION_SUCCESS':
            return {
                ...state,
                conversationList : payload
            }
        default :
            return state;
    }
}


