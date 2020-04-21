import React from 'react'

function MemberForm(props) {

    const {
        values,
        onInputChange,
        onSubmit,
    } = props

    return (
        <form>
            <h2>Member Form</h2>
            <label>Username:
            <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
            /></label><br />

            <label>Email:
            <input 
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
            /></label><br />

            <button onClick={onSubmit}>Submit</button>
        </form>
    )
}

export default MemberForm;