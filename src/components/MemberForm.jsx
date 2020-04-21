import React from 'react'

function MemberForm(props) {

    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
    } = props

    return (
        <form className='member container'>
            <h2>Member Form</h2>
            <label>Username:<br />
            <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
            /></label><br />

            <label>Email:<br />
            <input 
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
            /></label><br />

            <label><br /><input
            checked={values.roles.frontendengineer}
            onChange={onCheckboxChange}
            name='frontendengineer'
            type="checkbox" /> Front-End Engineer</label>
            <label><br /><input
            checked={values.roles.backendengineer}
            onChange={onCheckboxChange}
            name='backendengineer'
            type="checkbox" /> Back-End Engineer</label>
            <label><br /><input
            checked={values.roles.designer}
            onChange={onCheckboxChange}
            name='designer'
            type="checkbox" /> Designer</label><br />

            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default MemberForm;