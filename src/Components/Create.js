import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Create() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useNavigate();

    // const header = {"Access-Control-Allow-Origin": "'"};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        axios.post(
            "https://64998a8e79fbe9bcf83f7449.mockapi.io/curddd",{
            name: name,
            email: email,
        })
        .then(() => {
            history("/read"); 
        });
    };
  return (
    <>
    <div className='curdapp'>
        <div className="d-flex justify-content-between m-2">
        <h1>Create</h1>
        <Link to="/read">
        <button type="button" className="btn btn-primary">Show Data</button>
        </Link>
        </div>  
    <form>
    <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)}className="form-control"/>
    </div>
    <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
    </>
  )
}
