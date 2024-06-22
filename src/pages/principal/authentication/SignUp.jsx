import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from './../../auxiliary/AuthProvider';
// import axios from 'axios';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const [err, setErr] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;

        const info = { name, url, email };

        if (password.length < 6) {
            setErr("Password must have at leat 6 character");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErr("Must have at least 1 Uppercase");
            return;
        }
        if (!/[^a-zA-Z0-9]/.test(password)) {
            setErr("Must have at least 1 special character");
            return;
        }
        setErr("");

        createUser(email, password)
            .then(res => {
                // console.log(res.user);
                Swal.fire(
                    'Success',
                    'Account Created Successfully',
                    'success'
                )
                fetch("https://b8a11-server-side-mehedihasan712277.vercel.app/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                navigate('/');
                form.reset();
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
            <div className='flex flex-col items-center justify-center  pt-6 pb-20'>
                <form className='space-y-3 w-fit ml:shadow-2xl ml:px-8 rounded-md py-12' onSubmit={handleSubmit}>
                    <p className='text-center text-blue-700 font-bold'>Create Account</p>
                    <input type="text" name='name' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Name' /><br />
                    <input type="email" name='email' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Email' /><br />
                    <input type="password" name='password' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Password' /><br />
                    <input type="text" name='url' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Photo Url' /><br />
                    <p>{err}</p>
                    <Link to="/login">
                        <p className='text-xs w-fit py-1 hover:underline'>Already have account? Log in</p>
                    </Link>
                    <button type='submit' className='block mx-auto btn btn-outline btn-primary w-full'>Sign Up</button>
                </form>

            </div>
        </>
    )
}

export default SignUp