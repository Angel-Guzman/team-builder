import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';
import Member from './components/Member'
import MemberForm from './components/MemberForm'

const teamMembers = [
  {
    id: uuid(),
    username: 'Angel',
    email: 'angel@angel.com',
    roles: [
      'front-end engineer',
      'back-end engineer',
      'designer'
    ]
  },
  {
    id: uuid(),
    username: 'David',
    email: 'david@david.com',
    roles: [
      'front-end engineer',
      'back-end engineer',
      'designer'
    ]
  },
  {
    id: uuid(),
    username: 'Christian',
    email: 'christian@christian.com',
    roles: [
      'front-end engineer',
      'back-end engineer',
      'designer'
    ]
  }
]

const teamMembersValues = {
  username: '',
  email: ''
}

function App() {
  const [members, setMembers] = useState(teamMembers)

  const [formValues, setFormValues] = useState(teamMembersValues)
  
  const onInputChangeHandler = evt => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value
    })
  }

  const onSubmitHandler = evt => {
    evt.preventDefault()

    const newMember = {
      id: uuid(),
      username: formValues.username,
      email: formValues.email
    }

    setMembers([...members, newMember])

    setFormValues(teamMembersValues)
  }

  return (
    <div className="App">
      <header><h1>Team Members Form App</h1></header>
     {
       members.map(member => {
         return (
           <Member key={member.id} details={member} />
         )
       })
     } 
      <MemberForm 
        values={formValues}
        onInputChange={onInputChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}

export default App;
