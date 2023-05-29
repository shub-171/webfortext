import React from 'react'
import Feature from './Feature'

function FeaturesSec(props) {
    return (
        <>
            <div className="container my-5">
                <hr className='mb-5' style={{ color: props.mode === 'dark' ? '#777777' : '#1c1c1c' }} />
                <h1 style={{ color: props.mode === 'dark' ? 'white' : '#1c1c1c' }}>Cool Features😎</h1>
                <div className="row gy-4 mt-1" >
                    <Feature mode={props.mode} />
                </div>
            </div>
        </>
    )
}

export default FeaturesSec
