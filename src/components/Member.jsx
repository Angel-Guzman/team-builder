import React from 'react'

function Member({ details }) {
    if (!details) {
        return <h3>Working on fetching team member...</h3>
    }

    return (
        <div>
            <h2>{details.username}</h2>
            <p>Email: {details.email} </p>
        </div>
    )
}

export default Member;