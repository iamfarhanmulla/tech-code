import axios from 'axios'
import React, { Fragment,useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Read() {

    const [data, setData] = useState([]); 
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios.get("https://64998a8e79fbe9bcf83f7449.mockapi.io/curddd")
        .then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    }

    function handleDelete(id){
        axios.delete(`https://64998a8e79fbe9bcf83f7449.mockapi.io/curddd/${id}`)
    .then(() => {
        getData()
    })
    }

    const setLocalStorage =(id, name, email) => {
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
    }

  return (
    <>
    <div className='readapp'>
      <div className='d-flex justify-content-between m-2'>
    <h2>Read Operation</h2>
    <Link to="/">
        <button className="btn btn-secondary">Create</button>
        </Link>
        </div>
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
    {
        data.map((eachData) => {
            return(
                <Fragment key={eachData.id}>
            <tbody>
                <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td> 
                    <Link to='/update'>
                      <button type="button" className="btn btn-success" onClick={() => setLocalStorage(
                                                                                       eachData.id,
                                                                                       eachData.name,
                                                                                       eachData.email)}>Edit</button>
                    </Link>
                </td>
                <td> 
                <button type="button" className="btn btn-danger" onClick={() =>handleDelete(eachData.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
               </Fragment>
            )
        })
       }
  </table>
    </div>
    </div>
    </>
  )
}
