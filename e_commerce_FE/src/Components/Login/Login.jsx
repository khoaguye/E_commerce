import react, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
        console.log(email)
    }
    const handlePasswordChange = (e) =>{
        setPass(e.target.value)
        console.log(pass)
    }
    return (

        <div className="login-form flex items-center justify-center h-screen ">
            <div className="formm bg-light-grey flex flex-col items-center justify-center w-[90%] md:w-[30%] border border-black px-5 py-8 rounded-md ">
                <h2 className="text-3xl font-bold mb-8 text-green-900 ">Sign In</h2>
                <form className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            onChange = {handleEmailChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            onChange = {handlePasswordChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-green-900 hover:text-green-500"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <Link to = "/user/register">
                <div className="mt-5">
  <p class="pb-2 border-b-2">New User? Register Here!!!</p>

</div>
</Link>
            </div>
        </div>

    )
}