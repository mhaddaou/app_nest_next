// import { useState } from "react";

// function ContactSearch({ contacts, onSelect }) {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSelectContact = (contact) => {
//     onSelect(contact);
//     setSearchTerm("");
//   };

 
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for a contact..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <ul>
//         {filteredContacts.map((contact) => (
//           <li key={contact.id} onClick={() => handleSelectContact(contact)}>
//             {contact.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ContactSearch;
