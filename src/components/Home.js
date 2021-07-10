import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

const Home = () => {
    const contacts = useSelector(state => state);

    const dispatch = useDispatch();
    const deleteContact = (id) =>{
        dispatch({type:"DELETE_CONTACT", payload:id});
    }

    return (
        <div className="container">
            <h1 className="display-7 my-4">Contacts List</h1>
            <div className="row">
                <div className="col-md-12 mx-5 text-right">
                    <Link to="/add" className="btn btn-outline-dark">
                        Add Contact
                    </Link>
                </div>
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead className="text-white bg-dark text-center">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact,id)=>(
                                    <tr key={id}>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr-2">Edit</Link>
                                            <button type="button" onClick={() => deleteContact(contact.id)} className="btn btn-small btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home
