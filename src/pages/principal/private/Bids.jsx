import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auxiliary/AuthProvider';
import Swal from 'sweetalert2';

const Bids = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [reloader, setReloader] = useState(0);
    useEffect(() => {
        axios.get(`https://b8a11-server-side-mehedihasan712277.vercel.app/bid?uid=${user.uid}`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
    }, [reloader])


    const handleComplete = (id) => {
        const status = "completed";
        const newStatus = { status };
        fetch(`https://b8a11-server-side-mehedihasan712277.vercel.app/bid/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Successfull",
                    text: "Bid Completed",
                    icon: "success"
                });
                setReloader(reloader + 1);
            })
    }


    return (
        <>
            <div className='px-4 md:px-12 lg:px-20 xl:px-44 space-y-12 py-12 xl:pt-12 xl:pb-32'>
                {
                    loading ?
                        <div className='py-12 w-full flex flex-wrap justify-center gap-4 items-center'>
                            {/* <span className="loading loading-spinner text-accent"></span> */}
                            <div className="flex flex-col gap-4 w-52">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-4 w-52">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-4 w-52">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div>
                        :
                        data.length > 0 ?
                            data.map(ele => {
                                return <div key={ele._id} className='p-6 rounded-md w-full shadow-xl text-gray-600 flex flex-col justify-between'>
                                    <div>
                                        <p className='text-xl font-bold text-blue-700 mb-4'>{ele.jobTitle}</p>
                                        <p>{ele.buyerEmail}</p>
                                        <p><span className='font-bold text-gray-700'>Deadline : </span>{ele.deadline}</p>
                                        <p><span className='font-bold text-gray-700'>Price demanded($) : </span>{ele.price}</p>
                                        <p className='text-red-500'>
                                            {ele.status}
                                        </p>
                                        {
                                            ele.status === "in progress" &&
                                            <button className='btn btn-sm btn-error btn-outline' onClick={() => handleComplete(ele._id)}>Complete</button>
                                        }
                                    </div>
                                </div>
                            })
                            :
                            <div className='text-xl text-gray-700 font-bold py-[20vh] flex flex-col items-center'>
                                <img src="https://i.ibb.co/rZK2hvF/box-empty-svgrepo-com.png" className='h-32 w-32' alt="img" />
                                <p>
                                    You bid no job
                                </p>
                            </div>
                }
            </div>
        </>
    )
}

export default Bids