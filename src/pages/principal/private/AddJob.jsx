import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auxiliary/AuthProvider'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const AddJob = () => {
    const { user } = useContext(AuthContext);
    const [type, setType] = useState(false);
    const navigate = useNavigate();
    const handleType = () => {
        setType(true)
    }

    const handlePost = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const uid = user?.uid;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const maxPrice = Number(form.maxPrice.value);
        const minPrice = Number(form.minPrice.value);
        const category = form.category.value;

        const data = { email, uid, jobTitle, deadline, description, maxPrice, minPrice, category };

        Swal.fire({
            title: "Are you sure?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add job"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('https://b8a11-server-side-mehedihasan712277.vercel.app/job', data)
                    .then(res => {
                        console.log("from axios", res.data);
                        navigate(`/postedJobs/${user?.uid}`)
                        Swal.fire({
                            title: "Added!",
                            text: "Your job has been added.",
                            icon: "success"
                        });
                        form.reset();
                    })
            }
        });
    }
    return (
        <>
            <div>
                <div className='flex flex-col items-center justify-center pt-6 pb-20'>
                    <div className='ml:shadow-2xl ml:px-8 rounded-md py-12'>
                        <form className='space-y-3 w-fit' onSubmit={handlePost}>
                            <p className='text-center text-blue-700 font-bold'>Add Job</p>
                            <input type="email" name='email' defaultValue={user?.email} className='border-none bg-gray-200 text-gray-400 p-4 w-[300px] outline-none' readOnly placeholder='Email' /><br />
                            <input type="jobTitle" name='jobTitle' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Job title' /><br />
                            <input type={type ? "date" : "text"} onFocus={handleType} name='deadline' className='border-none bg-blue-100 p-4 w-[300px] outline-none text-gray-400' required placeholder='Deadline' /><br />
                            <input type="description" name='description' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Description' /><br />
                            <div className='flex'>
                                <input type="number" name='maxPrice' className='mr-[10px] border-none bg-blue-100 p-4 w-[145px] outline-none' required placeholder='Max price' /><br />
                                <input type="number" name='minPrice' className='border-none bg-blue-100 p-4 w-[145px] outline-none' required placeholder='Min price' /><br />
                            </div>
                            <div>
                                <span>Category : </span>
                                <select name='category' className='bg-blue-100 p-2'>
                                    <option value="web">Web Development</option>
                                    <option value="design">Graphic Design</option>
                                    <option value="marketing">Digital Marketing</option>
                                </select>
                            </div>
                            <button type='submit' className='block w-full mx-auto btn btn-primary btn-outline'>Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddJob