
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';

const memberList = [ 
  {name: 'Daniel', email: 'fagedd@bout.it', role: 'Student'}
]

const initialFormValues = {
  //text input
  name: '',
  email: '',
  //dropdown
  role: ''
}

export default function App() {
  const [teamMembers, setTeamMembers] = useState(memberList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }
  
  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  }

  
  return (
    <div className="App">
      <h1>Form App</h1>
      <Form 
        update={updateForm}
        submit={submitForm}
        values={formValues}
      />
      <h2>Team member list</h2>
      {
        teamMembers.map((teammate, idx) => {
          return (
            <div key={idx}>
              <p>name: {teammate.name}</p>
              <p>email: {teammate.email}</p>
              <p>role: {teammate.role}</p>
            </div>
          )
        })
      }
      
    </div>
  )
}

