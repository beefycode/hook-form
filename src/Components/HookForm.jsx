import React, { useState } from "react";

//Define component with (props) function
const HookForm = (props) => {
    //declare array of state variables and initialize
    const [fName,setfName] = useState("");
    const [lName,setlName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confPassword, setconfPassword] =useState("");
    
    //functions
    
    //functions for the event of onSubmission()
    const userCreation = (e) => {
        //onSubmit(e)vents information for preventDefault() refresh & keep state
        e.preventDefault();
        
        //reset the input field values on submission
        setfName("");
        setlName("");
        setEmail("");
        setPassword("");
        setconfPassword("");
    };
    //React component elements to return to App
    return(
        <form onSubmit={ userCreation }>
            <div>
                <label className="InputLabel">First Name<span><input className="Inputs" type="text" value={fName} onChange={(e) => setfName(e.target.value)}></input></span></label>
                <label className="InputLabel">Last Name<span><input className="Inputs" type="text" value={lName} onChange={(e) => setlName(e.target.value)}></input></span></label>
                <label className="InputLabel">Email<span><input className="Inputs" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input></span></label>
                <label className="InputLabel">Password<span><input className="Inputs" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input></span></label>
                <label className="InputLabel">Confirm Password<span><input className="Inputs" type="text" value={confPassword} onChange={(e) => setconfPassword(e.target.value)}></input></span></label>
            </div>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name <span>{fName}</span></p>
                <p>Last Name <span>{lName}</span></p>
                <p>Email <span>{email}</span></p>
                <p>Password <span>{password}</span></p>
                <p>Confirm Password <span>{confPassword}</span></p>
            </div>
            {/* Event for form submission to trigger clearing form */}
            <input type="submit" value="Submit"/>
        </form>
    )
}
export default HookForm;