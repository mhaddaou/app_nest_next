import Link from 'next/link';
import ContactSearch from './ContactSearch';
import { useState } from 'react';
import axios from 'axios';

export default function ContactList({  onContactClick }) {
    const contacts = [
      { id: 1, name: 'Alice' ,img: "https://cdn.intra.42.fr/users/0b44db41c0aff8300d8d24f0717cc7da/smia.jpg",},
      { id: 2, name: 'Bob',img: "https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg", },
      { id: 3, name: 'Charlie',img: "https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg", }
    ];
  
    function handleClick(contactId) {
      onContactClick(contactId);
    }
  
    return (
    // 
    <div>
        <h2 className="text-lg font-medium m-6  underline decoration-sky-500">Search For a Contacts</h2>

      <ContactSearch />
        <h2 className="text-lg font-medium m-6 underline decoration-sky-500">Contacts</h2>
  
  
      <ul>
      {contacts.map((contact) =>(
            <li className="flex items-center   m-2 p-2 bg-gray-200 rounded-full">
              <Link href={contact.img}>
              <img className="w-10 h-10 rounded-full mr-3" src={contact.img} alt="" />
              </Link>
              <button key={contact.id} onClick={()=>handleClick(contact.id)}>
              <div className="flex-1">
              <h3 className="text-gray-900 font-medium hover:text-lg hover:text-rose-950">{contact.name}</h3>
              {/* <p className="text-gray-600 text-sm">{contact.lastMessage}</p> */}
            </div>
              </button>
            </li>
          ))}
  
       
      </ul>
     
    </div>
    );
  }


