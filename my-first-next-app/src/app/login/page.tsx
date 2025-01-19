"use client"
import React, { useState } from 'react';  
  
const MessageList = ({ messages, onDelete }) => {  
  console.log(messages);
  
  return (  
    <ul>  
      {messages.map(message => (  
        <li key={message.attributes.cn}>  
          {message.attributes.cn}  
          <button onClick={() => onDelete(message.id)}>删除</button>  
        </li>  
      ))}  
    </ul>  
  );  
};  
  
function testEvent(params,eventObj){
  console.log(params);
  console.dir(eventObj);
}
const App = () => {  
  const [messages, setMessages] = useState([ 
    {
      "attributes": {
          "cn": "iot",
          "department": [],
          "description": [],
          "physicalDeliveryOfficeName": [],
          "sAMAccountName": "iot",
          "userPrincipalName": "iot@gtcist.cn"
      },
      "dn": "CN=iot,OU=普通用户,OU=207,DC=gtcist,DC=cn"
  },{
    "attributes": {
        "cn": "RAD",
        "department": "粤台产业科技学院",
        "description": [
            "202043308123"
        ],
        "physicalDeliveryOfficeName": "20多媒1班",
        "sAMAccountName": "RAD",
        "userPrincipalName": "RAD@gtcist.cn"
    },
    "dn": "CN=RAD,OU=普通用户,OU=207,DC=gtcist,DC=cn"
}
  ]);  
  
  const  handleDelete = async (e) => {  
    console.log(e);
    // const newMessages = messages.filter(message => message.attributes.cn !== cn);  
    // setMessages(newMessages);  
  };  
  
  return <MessageList messages={messages} onDelete={(e)=>this.testEvent("params",e)} />;  
};  
  
export default App;  