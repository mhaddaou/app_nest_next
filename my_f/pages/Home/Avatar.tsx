

import React from 'react';

const Avatar = ({ id, check } : any) => {
  const contacts = [
    { id: 1, name: 'Alice' ,img: "https://cdn.intra.42.fr/users/0b44db41c0aff8300d8d24f0717cc7da/smia.jpg",},
    { id: 2, name: 'Bob',img: "https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg", },
    { id: 3, name: 'Charlie',img: "https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg", }
  ];
  const contact = contacts.find(c => c.id === id);
  return (
    <div className={`flex items-center m-2 ${check === "false" ? "hidden" : "flex"}`}>
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={contact?.img} alt={contact?.name} className="w-full h-full object-cover" />
      </div>
      <p className="ml-4 font-medium text-gray-800">{contact?.name}</p>
    </div>
  );
};

export default Avatar;


