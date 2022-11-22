import React from 'react'
import PersonalDetails from './PersonalDetails'
import ProfileImage from './ProfileImage'

function Dashboard() {
    return (
        <>
            <div className="dashboard-wrap" style={{ marginTop: '100px' }}>
                <ProfileImage />
                <PersonalDetails />
            </div>
        </>
    )
}

export default Dashboard