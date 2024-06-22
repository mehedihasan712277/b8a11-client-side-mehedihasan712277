import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';

const PostedJobs = () => {
    const data = useLoaderData();
    const [remainingData, setRemainingData] = useState(data);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b8a11-server-side-mehedihasan712277.vercel.app/job/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(res => {
                        if (res.deletedCount > 0) {
                            const remaining = data.filter(ele => ele._id !== id);
                            setRemainingData(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "The job has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <>
            <div className='flex justify-center flex-wrap py-12 gap-8 px-4'>
                {
                    remainingData?.length > 0 ?
                        remainingData.map(ele => {
                            return <div key={ele._id} className='p-6 rounded-md w-[300px] ml:w-96 sm:w-72 md:w-80 lg:w-96 shadow-xl text-gray-600 flex flex-col justify-between'>
                                <div>
                                    <p className='text-xl font-bold text-blue-700 mb-4'>{ele.jobTitle}</p>
                                    <p><span className='font-bold text-gray-700'>Deadline : </span>{ele.deadline}</p>
                                    <p><span className='font-bold text-gray-700'>Price range($) : </span>{ele.maxPrice}-{ele.minPrice}</p>
                                    <p>
                                        <span className='font-bold text-gray-700'>Description : </span>
                                        {ele.description}
                                    </p>
                                </div>
                                <div className='flex justify-between mt-4'>
                                    <Link to={`/update/${ele._id}`} state={ele._id}>
                                        <button className='btn btn-outline btn-primary'>Update</button>
                                    </Link>
                                    <button className='btn btn-outline btn-primary' onClick={() => handleDelete(ele._id)}>Delete</button>
                                </div>
                            </div>
                        })
                        :
                        <>
                            <div className='pt-32 pb-44 text-center font-bold text-xl text-gray-600'>You have posted no job</div>
                        </>
                }
            </div>
        </>
    )
}

export default PostedJobs