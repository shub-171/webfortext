import React from 'react'

function Footer(props) {
    return (
        <div className='d-flex shadow-lg justify-content-center' style={{ backgroundColor: props.mode === 'dark' ? '#2a2a2a' : '#e0e0e0', color: props.mode === 'dark' ? 'white' : '#020202' }}>
            <p className='my-2'>Made With ❤️ By shubham Agrawal</p>
        </div>
    )
}

export default Footer