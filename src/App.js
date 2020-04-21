import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './components/Member'
import MemberForm from './components/MemberForm'

const teamMembers = [
  {
    id: 1,
    username: 'Angel',
    email: 'angel@angel.com'
  },
  {
    id: 2,
    username: 'David',
    email: 'david@david.com'
  },
  {
    id: 3,
    username: 'Christian',
    email: 'christian@christian.com'
  }
]

function App() {
  const [members, setMembers] = useState(teamMembers)
  
  return (
    <div className="App">
     {
       members.map(member => {
         return (
           <Member key={member.id} details={member} />
         )
       })
     } 
      <MemberForm />
    </div>
  );
}

export default App;
