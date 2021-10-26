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
            localStorage.setItem("Token",res['token']);
            localStorage.setItem("RefreshToken",res['refreshToken']);
        }
        else {
            throw new Error("ERROR_LOGIN_FAIL");
        }
    }


}

export default new Authentication();