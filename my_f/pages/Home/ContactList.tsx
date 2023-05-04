import Link from 'next/link';


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
        <h2 className="text-lg font-medium mb-4">Contacts</h2>
  
  
      <ul>
      {contacts.map((contact) =>(
            <li className="flex items-center py-2">
              <Link href={contact.img}>
              <img className="w-8 h-8 rounded-full mr-3" src={contact.img} alt="" />
              </Link>
              <button key={contact.id} onClick={()=>handleClick(contact.id)}>
              <div className="flex-1">
              <h3 className="text-gray-900 font-medium">{contact.name}</h3>
              {/* <p className="text-gray-600 text-sm">{contact.lastMessage}</p> */}
            </div>
              </button>
            </li>
          ))}
  
       
      </ul>
    </div>
    );
  }