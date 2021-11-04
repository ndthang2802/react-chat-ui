class Conversation {
    async get() {
        var token = localStorage.getItem('Token');
        console.log(token);
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
        else {
            throw new Error("CONSERVATION_GET_ERROR");
        }
    }


}

export default new Conversation();