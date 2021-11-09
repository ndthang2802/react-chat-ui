class Authentication {
    async login(data) {
        var res = await fetch("https://localhost:5001/api/Auth/login",{
            method : 'POST',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        if (res.status === 200) {
            res = await res.json();
            localStorage.setItem("token",res['token']);
            localStorage.setItem("RefreshToken",res['refreshToken']);
            return res;
        }
        else {
            throw new Error("ERROR_LOGIN_FAIL");
        }
    }

    async TokenRefresh() {
        var token = localStorage.getItem('token');
        var refreshToken = localStorage.getItem('RefreshToken');
        const data = {"accessToken":token,"refreshToken":refreshToken};
        var res = await fetch("https://localhost:5001/api/Auth/refresh",{
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
            localStorage.setItem("token",res['accessToken']);
            localStorage.setItem("RefreshToken",res['refreshToken']);
            return res;
        }
        else {
            throw new Error("ERROR_REFRESH_FAIL");
        }
        
    }



}

export default new Authentication();