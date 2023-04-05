import react, {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //signInWithEmailAndPassword(auth, email, pass);
        //.then((userCredential) => {
           // console.log(userCredential);
       // }).catch((error)=> {
           // console.log(error)
      //  })
        console.log(email);
    }
    return(
        <div className="auth-form-container">
        
        <form className = "login-form" onSubmit={handleSubmit}>
            <label htmlfor="email">Email:</label>
            <input
            className="h-5 w-40"
            placeholder = "youremail@gmail.com"
            size={35}
            type="email"
    />
    <label htmlfor="password">Password:</label>
            <input
            className="h-5 w-40"
            placeholder = "*********"
            size={35}
            type="password"
    />
            {/* <input value={email} on change={(e) => setEmail(e.target.value)}type = "email" placeholder="YourEmail@email.com" id="email" name ="email"></input> */}
            
            {/* <input value={pass}  on change={(e) => setPass(e.target.value)}type = "password" placeholder="********" id="password" name ="password"></input> */}
            <Link to = "/">
            <button type="submit">Login</button>
            </Link>
        </form>
        <button>Register here!</button>
        </div>
    )
}