import { useState } from "react";
// import ChatApp from "../ChatApp";
import ChatHistory from "./ChatHistory";
import Link from "next/link";
import ContactList from "./ContactList";
import axios from 'axios';

export default function Tome() {
  const [id, setId] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);

  async function handleContactClick(contactId : any) {
    setId(contactId);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${contactId}`);
        setChatHistory(res.data);
  }

  
    
  return (
    <div className="bg-black">
      <div className="flex flex-row h-screen gap-1">
        <div className="w-1/4  p-4 bg-gray-300">
          <ContactList onContactClick={handleContactClick} />
        </div>
        <div className="w-1/2 bg-gray-400 p-4 h-full">
          <ChatHistory chatHistory={chatHistory} id = {id} />
        </div>
        <div className="w-1/4 bg-gray-300 p-4">info Field</div>
      </div>
    </div>
  );
}







