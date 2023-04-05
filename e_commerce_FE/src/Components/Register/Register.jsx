import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const[fname, setfName] = useState('');
    const[lname, setlName] = useState('');
    const[phonenum, setNum] = useState('');
    const[adress, setAd] = useState('');
    const[city, setCity] = useState('');
    const[zip, setZip] = useState('');
    const[bday, setBday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
        
        <form className = "register-form" onSubmit={handleSubmit}>
        <label htmlfor="email">Email:</label>
        <input
            className="h-5 w-40"
            placeholder = "youremail@gmail.com"
            size={35}
            type="email"
    />
        {/* <input value={email} on change={(e) => setEmail(e.target.value)}type = "email" placeholder="YourEmail@email.com" id="email" name ="email"></input> */}
        <label htmlfor="password">Password:</label>
        <input
            className="h-5 w-40"
            placeholder = "*********"
            size={35}
            type="password"
    />
        {/* <input value={pass}  on change={(e) => setPass(e.target.value)}type = "password" placeholder="********" id="password" name ="password"></input> */}
        <label htmlfor="fname">FirstName:</label>
        <input
            className="h-5 w-40"
            placeholder = "firstname"
            size={35}
            type="text"
    />
        {/* <input value={fname} on change={(e) => setfName(e.target.value)}type = "fname" placeholder="firstname" id="fname" name ="fname"></input> */}
        <label htmlfor="lname">LastName:</label>
        <input
            className="h-5 w-40"
            placeholder = "lastname"
            size={35}
            type="text"
    />
        {/* <input value={lname} on change={(e) => setlName(e.target.value)}type = "lname" placeholder="lastname" id="lname" name ="lname"></input> */}
        <label htmlfor="phonenum">PhoneNumber:</label>
        <input
            className="h-5 w-40"
            placeholder = "(xxx)xxx-xxxx"
            size={35}
            type="text"
    />
        {/* <input value={phonenum} on change={(e) => setNum(e.target.value)}type = "phonenum" placeholder="(xxx)xxx-xxxx" id="phonenum" name ="phonenum"></input> */}
        <label htmlfor="adress">Adress:</label>
        <input
            className="h-5 w-40"
            placeholder = "123 yourstreet"
            size={35}
            type="text"
    />
        {/* <input value={adress} on change={(e) => setAd(e.target.value)}type = "adress" placeholder="123 st." id="adress" name ="adress"></input> */}
        <label htmlfor="city">City:</label>
        <input
            className="h-5 w-40"
            placeholder = "City"
            size={35}
            type="text"
    />
        {/* <input value={city} on change={(e) => setCity(e.target.value)}type = "city" placeholder="City initials here" id="city" name ="city"></input> */}
        <label htmlfor="zip">Zipcode:</label>
        <input
            className="h-5 w-40"
            placeholder = "zipcode"
            size={35}
            type="text"
    />
        {/* <input value={zip} on change={(e) => setZip(e.target.value)}type = "zip" placeholder="xxxxx" id="zip" name ="zip"></input> */}
        <label htmlfor="bday">BirthDay:</label>
        <input
            className="h-5 w-40"
            placeholder = "monthdayyear"
            size={35}
            type="date"
    />
        {/* <input value={bday} on change={(e) => setBday(e.target.value)}type = "bday" placeholder="MonthDayYear" id="bday" name ="bday"></input> */}
        
        <button type="submit">Create Account</button>
        </form>
        <Link to = "/user/Login">
        <button>Already have an account? Login here.</button>

        </Link>

        
        </div>
    )
}