import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className='px-4 py-8 ml:py-16'>
                <div className='max-w-3xl mx-auto'>
                    <p className='text-center text-3xl text-gray-600 font-bold'>About <span className='text-blue-700'>Job-hub</span></p>
                    <p className='text-center text-gray-500 py-6'>
                        At Job Hub, we are passionate about connecting talented individuals with exciting career opportunities in the ever-evolving digital landscape. Whether you're a skilled professional seeking the perfect job or a company looking to hire top-notch talent, Job Hub is the platform that brings the right people together.

                    </p>
                    <div className='flex gap-8 justify-center py-6'>
                        <div>
                            <img className='h-20 ml:h-32 w-20 ml:w-32' src="https://i.ibb.co/rZdfNmf/marketing.png" alt="img" />
                            <p className='text-center font-bold text-gray-600'>Digital <br /> Marketing</p>
                        </div>
                        <div>
                            <img className='h-20 ml:h-32 w-20 ml:w-32' src="https://i.ibb.co/vDBrW60/web.png" alt="img" />
                            <p className='text-center font-bold text-gray-600'>Web <br /> Development</p>
                        </div>
                        <div>
                            <img className='h-20 ml:h-32 w-20 ml:w-32' src="https://i.ibb.co/687Yqc6/graphic.png" alt='img' />
                            <p className='text-center font-bold text-gray-600'>Graphic <br /> Design</p>
                        </div>
                    </div>
                    <div className='text-center py-6'>
                        <Link to="/about">
                            <button className='btn btn-outline btn-primary'>Know More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About