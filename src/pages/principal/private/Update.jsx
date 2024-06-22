import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../../auxiliary/AuthProvider';

const Update = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(data);
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const maxPrice = Number(form.maxPrice.value);
        const minPrice = Number(form.minPrice.value);
        const category = form.category.value;

        const newData = { jobTitle, deadline, description, maxPrice, minPrice, category }

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to update this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b8a11-server-side-mehedihasan712277.vercel.app/job/${data._id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newData)
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        Swal.fire({
                            title: "Successfull",
                            text: "Information updated successfully",
                            icon: "success"
                        });
                        navigate(`/postedJobs/${user?.uid}`);
                    })
            }
        });
    }
    return (
        <>
            <div className='flex justify-center pt-6 pb-16'>
                <div className='ml:shadow-2xl ml:px-8 rounded-md py-12'>
                    <form className='space-y-3 w-fit' onSubmit={handleUpdate}>
                        <p className='text-center text-blue-700 font-bold'>Update Information</p>
                        <input type="email" name='email' value={data?.email} className='border-none bg-gray-200 text-gray-400 p-4 w-[300px] outline-none' readOnly placeholder='Email' /><br />
                        <input type="jobTitle" defaultValue={data?.jobTitle} name='jobTitle' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Job title' /><br />
                        <input type="date" name='deadline' defaultValue={data?.deadline} className='border-none bg-blue-100 p-4 w-[300px] outline-none text-gray-400' required placeholder='Deadline' /><br />
                        <input type="description" name='description' defaultValue={data?.description} className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Description' /><br />
                        <div className='flex'>
                            <input type="number" name='maxPrice' defaultValue={data?.maxPrice} className='mr-[10px] border-none bg-blue-100 p-4 w-[145px] outline-none' required placeholder='Max price' /><br />
                            <input type="number" name='minPrice' defaultValue={data?.minPrice} className='border-none bg-blue-100 p-4 w-[145px] outline-none' required placeholder='Min price' /><br />
                        </div>
                        <div>
                            <span>Category : </span>
                            <select name='category' className='bg-blue-100 p-2'>
                                <option value="web">Web Development</option>
                                <option value="design">Graphic Design</option>
                                <option value="marketing">Digital Marketing</option>
                            </select>
                        </div>
                        <button type='submit' className='block w-full mx-auto btn btn-primary btn-outline'>Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update