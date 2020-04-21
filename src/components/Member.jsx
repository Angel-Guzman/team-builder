import React from 'react'

function Member({ details }) {
    if (!details) {
        return <h3>Working on fetching team member...</h3>
    }

    return (
        <div className='container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email} </p>

            {
                !!details.roles && !! details.roles.length &&
                <div className='member'>
                    Roles:
                    <ul className='memberUL'>
                        {
                            details.roles.map((role, idx) => <p key={idx}>{role}</p>)
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Member;