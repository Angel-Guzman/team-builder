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
      'back-end engineer'
    ]
  },
  {
    id: uuid(),
    username: 'David',
    email: 'david@david.com',
    roles: [
      'designer'
    ]
  },
  {
    id: uuid(),
    username: 'Christian',
    email: 'christian@christian.com',
    roles: [
      'front-end engineer'
    ]
  }
]

const teamMembersValues = {
  username: '',
  email: '',
  roles: {
    frontendengineer: false,
    backendengineer: false,
    designer: false,
  },

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
      email: formValues.email,
      roles: Object.keys(formValues.roles)
        .filter(role => formValues.roles[role] === true)
    }

    setMembers([...members, newMember])

    setFormValues(teamMembersValues)
  }

  const onCheckBoxChangeHandler = evt => {

    const { name } = evt.target

    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      roles: {
        ...formValues.roles,
        [name]: isChecked
      }
    })
  }

  return (
    <div className="container">
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
        onCheckboxChange={onCheckBoxChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}

export default App;
