import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Jobs = () => {
    const [webData, setwebData] = useState([]);
    const [designData, setDesignData] = useState([]);
    const [marketingData, setMarketingData] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        axios.get(`https://b8a11-server-side-mehedihasan712277.vercel.app/job`)
            .then(res => {
                const dataWeb = res.data.filter(ele => ele.category === "web");
                setloading(false);
                const dataDesign = res.data.filter(ele => ele.category === "design");
                const dataMarketing = res.data.filter(ele => ele.category === "marketing");
                setwebData(dataWeb);
                setMarketingData(dataMarketing);
                setDesignData(dataDesign);
            })
    }, [])
    if (loading) {
        return <>
            <div className='py-12 w-full flex justify-center items-center'>
                <span className="loading loading-spinner text-accent"></span>
            </div>
        </>
    }
    return (
        <>
            <div className='select-none lg:px-20 md:px-12 px-4'>
                <Tabs>
                    <TabList>
                        <div className='flex justify-center w-full'>
                            <Tab>Web Development</Tab>
                            <Tab>Graphic Design</Tab>
                            <Tab>Digital Marketing</Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className='flex gap-8 flex-wrap justify-center pt-8 pb-12 md:pb-16 lg:pb-20'>
                            {
                                webData.map(ele => {
                                    return <div key={ele._id} className='p-6 rounded-md w-56 md:w-72 lg:w-96 shadow-xl text-gray-600 flex flex-col justify-between'>
                                        <div>
                                            <p className='text-xl font-bold text-blue-700 mb-4'>{ele.jobTitle}</p>
                                            <p><span className='font-bold text-gray-700'>Deadline : </span>{ele.deadline}</p>
                                            <p><span className='font-bold text-gray-700'>Price range($) : </span>{ele.maxPrice}-{ele.minPrice}</p>
                                            <p>
                                                <span className='font-bold text-gray-700'>Description : </span><br />
                                                {ele.description.slice(0, 100)}...
                                            </p>
                                        </div>
                                        <div className='flex justify-center mt-4'>
                                            <Link to={`/job/${ele._id}`} state={ele._id}>
                                                <button className='btn btn-outline btn-primary'>Bid Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex gap-8 flex-wrap justify-center pt-8 pb-12 md:pb-16 lg:pb-20'>
                            {
                                designData.map(ele => {
                                    return <div key={ele._id} className='p-6 rounded-md w-56 md:w-72 lg:w-96 shadow-xl text-gray-600 flex flex-col justify-between'>
                                        <div>
                                            <p className='text-xl font-bold text-blue-700 mb-4'>{ele.jobTitle}</p>
                                            <p><span className='font-bold text-gray-700'>Deadline : </span>{ele.deadline}</p>
                                            <p><span className='font-bold text-gray-700'>Price range($) : </span>{ele.maxPrice}-{ele.minPrice}</p>
                                            <p>
                                                <span className='font-bold text-gray-700'>Description : </span><br />
                                                {ele.description.slice(0, 100)}...
                                            </p>
                                        </div>
                                        <div className='flex justify-center mt-4'>
                                            <Link to={`/job/${ele._id}`} state={ele._id}>
                                                <button className='btn btn-outline btn-primary'>Bid Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex gap-8 flex-wrap justify-center pt-8 pb-12 md:pb-16 lg:pb-20'>
                            {
                                marketingData.map(ele => {
                                    return <div key={ele._id} className='p-6 rounded-md w-56 md:w-72 lg:w-96 shadow-xl text-gray-600 flex flex-col justify-between'>
                                        <div>
                                            <p className='text-xl font-bold text-blue-700 mb-4'>{ele.jobTitle}</p>
                                            <p><span className='font-bold text-gray-700'>Deadline : </span>{ele.deadline}</p>
                                            <p><span className='font-bold text-gray-700'>Price range($) : </span>{ele.maxPrice}-{ele.minPrice}</p>
                                            <p>
                                                <span className='font-bold text-gray-700'>Description : </span><br />
                                                {ele.description.slice(0, 100)}...
                                            </p>
                                        </div>
                                        <div className='flex justify-center mt-4'>
                                            <Link to={`/job/${ele._id}`} state={ele._id}>
                                                <button className='btn btn-outline btn-primary'>Bid Now</button>
                                            </Link>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default Jobs