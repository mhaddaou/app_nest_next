import {useState} from 'react';

function ContactItem({ contact, onClick }) {
    return (
      <div
        className="py-2 px-4 cursor-pointer hover:bg-gray-200"
        onClick={() => onClick(contact.id)}
      >
        <div className="font-bold">{contact.name}</div>
        <div className="text-gray-600">{contact.email}</div>
      </div>
    );
  }
  
  function ContactList({ contacts, onContactClick }) {
    return (
      <div className="bg-sky-900 p-4">
        <h2 className="text-lg font-bold text-white mb-4">Contacts</h2>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onClick={onContactClick}
          />
        ))}
      </div>
    );
  }

  export default function Tome() {
    const [contactId, setContactId] = useState(null);
    const [chatHistory, setChatHistory] = useState([]);
  
    async function fetchChatHistory(contactId) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${contactId}`);
      const chatHistory = await response.json();
      setChatHistory(chatHistory);
    }
  
    function handleContactClick(contactId) {
      setContactId(contactId);
      fetchChatHistory(contactId);
    }
    const contacts = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
      
  
    return (
      <div className="bg-saliha">
        <div className="flex flex-row h-screen gap-1">
          <div className="w-1/4 bg-sky-900 p-4">
          <ContactList contacts={contacts} onContactClick={handleContactClick} />

          </div>
          <div className="w-1/2 bg-rtn p-4 h-full">
            <ChatHistory chatHistory={chatHistory} />
          </div>
          <div className="w-1/4 bg-sky-900 p-4">Input Field</div>
        </div>
      </div>
    );
  }
  function ChatHistory({ chatHistory }) {
    return (
      <div className="bg-rtn p-4 h-full">
        <h2 className="text-lg font-bold text-white mb-4">Chat History</h2>
        {chatHistory.map((chat) => (
            <div className="overflow-y-auto">
          {/* Render chat history data here */}
            <div key={chat.id}>{chat.body}</div>
        </div>
            ))}
      </div>
    );
  }
    
  

