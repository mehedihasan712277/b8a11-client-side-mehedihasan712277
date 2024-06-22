import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auxiliary/AuthProvider';
import Swal from 'sweetalert2';

const BidRequests = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [reloader, setReloader] = useState(0);
    useEffect(() => {
        axios.get(`https://b8a11-server-side-mehedihasan712277.vercel.app/request?buyerEmail=${user.email}`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
    }, [reloader])
    const handleReject = (id) => {
        const status = "canceled";
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
                    text: "Bid rejected successfully",
                    icon: "success"
                });
                setReloader(reloader + 1);
            })
    }

    const handleAccept = (id) => {
        const status = "in progress";
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
                    text: "Bid Accepted successfully",
                    icon: "success"
                });
                setReloader(reloader + 1);
            })
    }
    return (
        <>
            <div className='px-4 md:px-12 lg:px-20 xl:px-32'>
                {
                    loading ?
                        <div className='py-12 flex flex-col gap-6'>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="skeleton h-20 md:h-32 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="skeleton h-20 md:h-32 w-full"></div>
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="skeleton h-20 md:h-32 w-full"></div>
                            </div>
                        </div>
                        :
                        data.length > 0 ?
                            <div className='flex flex-col gap-4 py-12'>
                                {
                                    data.map(ele => {
                                        return <div key={ele._id} className='bg-green-100 p-4 rounded-md md:flex lg:items-center md:justify-between'>
                                            <div className='lg:flex lg:items-center lg:justify-between lg:flex-1'>
                                                <div>
                                                    <p className='text-xl font-bold text-gray-600'>{ele.jobTitle}</p>
                                                    <p className='text-gray-500'>{ele.applicantEmail}</p>
                                                    <p className='text-gray-500'>{ele.price}$</p>
                                                    <p className='text-gray-500'>Deadline : {ele.deadline}</p>
                                                </div>
                                                <div className="badge badge-error badge-outline gap-2 my-4">
                                                    {ele.status}
                                                </div>
                                            </div>

                                            <div className='flex justify-end gap-2 lg:flex-1'>
                                                <button className='btn btn-outline btn-neutral btn-sm' onClick={() => handleAccept(ele._id)}>accept</button>
                                                <button className='btn btn-outline btn-neutral btn-sm' onClick={() => handleReject(ele._id)}>reject</button>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            :
                            <div className='text-xl text-gray-700 font-bold pt-[15vh] pb-[25vh] flex flex-col items-center'>
                                <img src="https://i.ibb.co/rZK2hvF/box-empty-svgrepo-com.png" className='h-32 w-32' alt="img" />
                                <p>Nobody has bid yet</p>
                            </div>
                }
            </div>
        </>
    )
}

export default BidRequests