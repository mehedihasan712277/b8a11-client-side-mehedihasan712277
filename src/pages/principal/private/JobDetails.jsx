import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../auxiliary/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2'

const JobDetails = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const [type, setType] = useState(false);
    const handleType = () => {
        setType(true)
    }
    const handleBid = (event) => {
        event.preventDefault();
        const jobTitle = data.jobTitle;
        const deadline = data.deadline;
        const maxPrice = data.maxPrice;
        const minPrice = data.minPrice;
        const description = data.description;
        const category = data.category;
        const buyerEmail = data.email;
        const applicantEmail = user.email;
        const uid = user.uid;
        const status = "pending";

        const form = event.target;
        const price = form.price.value;
        const date = form.date.value;

        const details = { jobTitle, deadline, maxPrice, minPrice, description, category, buyerEmail, applicantEmail, price, date, uid, status };
        axios.post("https://b8a11-server-side-mehedihasan712277.vercel.app/bid", details)
            .then(res => {
                Swal.fire({
                    title: "Success",
                    text: "successfully bid",
                    icon: "success"
                });
                form.reset();
            })
    }
    return (
        <>
            <div className='py-12'>
                <div className='px-4 md:px-12 lg:px-16 xl:px-32 text-gray-600 flex flex-col justify-between'>
                    <div>
                        <p className='text-xl font-bold text-blue-700'>{data?.jobTitle}</p>
                        <p><span className='font-bold text-gray-700'>Deadline : </span>{data?.deadline}</p>
                        <p><span className='font-bold text-gray-700'>Price range($) : </span>{data?.maxPrice}-{data?.minPrice}</p>
                        <p>
                            <span className='font-bold text-gray-700'>Description : </span>{data?.description}
                        </p>
                    </div>
                </div>

                <div className='py-6'>
                    <form className='space-y-3 w-fit mx-auto shadow-xl py-8 px-4' onSubmit={handleBid}>
                        <p className='text-center text-blue-700 font-bold'>Place Your Bid</p>
                        <input type="number" name='price' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Price' /><br />
                        <input type={type ? "date" : "text"} onFocus={handleType} name='date' className='border-none bg-blue-100 p-4 w-[300px] outline-none' required placeholder='Date' /><br />
                        <input type="email" name='email' value={data?.email} className='border-none bg-gray-100 text-gray-400 p-4 w-[300px] outline-none' readOnly /><br />
                        <input type="email" name='email' value={user?.email} className='border-none bg-gray-100 text-gray-400 p-4 w-[300px] outline-none' readOnly /><br />
                        {
                            (data?.email === user?.email) ?
                                <button className='block w-full mx-auto btn btn-disabled'>Cannot bid your own project</button>
                                :
                                <button type='submit' className='block w-full mx-auto btn btn-primary btn-outline'>Bid on project</button>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default JobDetails