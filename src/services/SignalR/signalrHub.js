import { HubConnectionBuilder } from "@microsoft/signalr";

class Hub {
    EstablishConnection = () => {

        const connect = new HubConnectionBuilder()
          .withUrl("https://localhost:5001/chatHub",{accessTokenFactory : ()=>localStorage.getItem('Token') })
          .build();    
        return connect;
    }
    SendMessage = async (connection,inputText,group) => {
        if (connection) await connection.invoke("SendMessageToGroup", inputText,group);
    };

    AddToGroup = async (connection,groupName) => {
        if (connection) await connection.invoke("AddToGroup", groupName);
    };


}

export default new Hub();