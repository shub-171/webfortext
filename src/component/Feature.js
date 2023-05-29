import React from 'react'
import Features from "./features.json"

function Feature(props) {
    return (
        <>
            {
                Features && Features.map(feature => {
                    return (
                        <div className="col-lg-4 col-sm-6"  key={feature.id} >
                            <div className="card border-0 shadow rounded-lg text-start px-2" style={{minHeight:"300px", backgroundColor: props.mode === 'dark' ? '#2a2a2a' : '#eeeeee80', color: props.mode === 'dark' ? '#f1f1f1' : '#1c1c1c' }}>
                                <div className="card-body px py-5" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" fill="currentColor" className={feature.svgClass} viewBox="0 0 16 16" style={{ color: "#0000FF" }}>
                                        <path d={feature.svgPath} />
                                        <path d={feature.svgPath2   } />
                                    </svg>
                                    <h3 className="h5 my-3">{feature.heading}</h3>
                                    <p className="text-sm mb-0 text-muted">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Feature