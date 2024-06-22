import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../auxiliary/AuthProvider';

const SignIn = () => {
    const { logIn, createUserGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(res => {
                form.reset();
                Swal.fire(
                    'Success',
                    'Successfully Logged In',
                    'success'
                )
                navigate(location?.state ? location?.state : "/");
            })
            .catch(err => {
                Swal.fire(
                    'Opps',
                    `${err.message}`,
                    'error'
                )
            })
    }
    const googleSignIn = () => {
        createUserGoogle()
            .then(res => {
                Swal.fire(
                    'Success',
                    'Signed in by Google Successfully',
                    'success'
                )
                navigate(location?.state ? location?.state : "/");
            })
            .catch(err => {
                Swal.fire(
                    'Opps',
                    `${err.message}`,
                    'error'
                )
            })
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center pt-6 pb-20'>
                <div className='ml:shadow-2xl ml:px-8 rounded-md py-12'>
                    <form className='space-y-3 w-fit' onSubmit={handleSubmit}>
                        <p className='text-center text-blue-700 font-bold'>Log In Here</p>
                        <input type="email" name='email' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Email' /><br />
                        <input type="password" name='password' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Password' /><br />
                        <Link to="/register">
                            <p className='text-xs w-fit py-2 hover:underline'>New Here ? Sign Up</p>
                        </Link>
                        <button type='submit' className='block w-full mx-auto btn btn-primary btn-outline'>Log In</button>
                    </form>
                    <div className='flex flex-col items-center'>
                        <p>Or</p>
                        <p>Sign in with</p>
                        <button className='btn' onClick={googleSignIn}><FcGoogle className='text-3xl' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn