import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update() {
    const [id, setId] = useState(0);
    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])
    
    const handleUpdate= (e) => {
        e.preventDefault();
        axios.put(`https://64998a8e79fbe9bcf83f7449.mockapi.io/curddd/${id}`,{
        name: name,
            email: email,
    })
    .then(() => {
        navigate("/read");
    });
    }


  return (
    <>
    <div>
        <h2>Update</h2>   
    <form>
    <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}className="form-control"/>
    </div>
    <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
    </form>
    </div>
    </>
  )
}
