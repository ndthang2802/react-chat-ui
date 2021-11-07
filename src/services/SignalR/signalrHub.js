import { HubConnectionBuilder } from "@microsoft/signalr";

class Hub {
    
    EstablishConnection = () => {

        const connect = new HubConnectionBuilder()
          .withUrl("https://localhost:5001/chatHub",{accessTokenFactory : ()=>localStorage.getItem('Token') })
          .withAutomaticReconnect()
          .build();    
          
        return connect;
    }
    async SendMessage(connection,inputText,group){
        if (connection) await connection.invoke("SendMessageToGroup", inputText,group);

    };

    async AddToGroup(connection,groupName){
        if (connection) await connection.invoke("AddToGroup", groupName);
    };


}

export default new Hub();