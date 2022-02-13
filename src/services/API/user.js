class User {
    async getUserInfo() {
        var token = localStorage.getItem('token');
        var res = await fetch("https://localhost:5001/api/User/userInfo",{
            method : 'GET',
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
            throw new Error("GET_USER_INFO_FAIL");
        }
    }


}

export default new User();