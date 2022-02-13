class Conversation {
    async get() {
        var token = localStorage.getItem('token');
        var res = await fetch("https://localhost:5001/api/Chat/getCoversation",{
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + token
            },
        })
        if (res.status === 200) {
            res = await res.json();
            return res;
        }
        else if (res.status === 401) {
            res = await res.json();
            if(res['message'] === 'Token has expired'){
                throw new Error("TOKEN_EXPIRED");
            }
        }
        else {
            throw new Error("CONSERVATION_GET_ERROR");
        }
    }

    async createRoom(data) {
        var token = localStorage.getItem('token');
        var res = await fetch("https://localhost:5001/api/Chat/createRoom",{
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body : JSON.stringify(data)
        })
        if (res.status === 200) {
            res = await res.json();
            return res;
        }
        else if (res.status === 401) {
            res = await res.json();
            if(res['message'] === 'Token has expired'){
                throw new Error("TOKEN_EXPIRED");
            }
        }
        else {
            throw new Error("ROOM_CREATE_ERROR");
        }
    }

    async JoinInRoom(data){
        var token = localStorage.getItem('token');
        var res = await fetch("https://localhost:5001/api/Chat/joinRoom",{
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + token
            },
            body : JSON.stringify(data)
        })
        if (res.status === 200) {
            res = await res.json();
            return res;
        }
        else if (res.status === 401) {
            res = await res.json();
            if(res['message'] === 'Token has expired'){
                throw new Error("TOKEN_EXPIRED");
            }
        }
        else {
            throw new Error("ROOM_JOIN_ERROR");
        }
    }


}

export default new Conversation();