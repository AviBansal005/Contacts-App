import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const AddContact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");

    
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact=>contact.email === email && email)
        const checkNumber = contacts.find(contact=>contact.number === parseInt(number))
        console.log(email,number,name);

        if(!email || !number || !name ){
            return alert("Please fill in all fields");
        }

        if(checkEmail) {
            return alert("This email already exists.")
        }

        
        if(checkNumber) {
            return alert("This number already exists.")
        }

        const data = {
            id: contacts.length>0?contacts[contacts.length -1].id+1:0,
            name,
            email,
            number
        }

        dispatch({type: "ADD_CONTACT", payload:data});
        history.push("/");
    }

    return (
        <div className="container">
            <h1 className="display-3 my-5 text-center">Add Contact</h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Phone Number" className="form-control" value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" placeholder="Add Contact" className="btn btn-block btn-dark" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
