import React from 'react'
import fire from './config'

export default function home() {

    const handleSignout=()=>{
        fire.auth().signOut();
    }
    return (
        <div className="row a bg-info d-flex justify-content-around">
            <h2 className="col-6 m-2">Welcome</h2>
            <button className="btn bg-dark text-white m-2 " onClick={handleSignout}>Logout</button>
        </div>
    )
}
