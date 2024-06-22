import React from 'react'

const Details = () => {
    return (
        <div className='px-4 md:px-12 lg:px-20 xl:px-52 pb-12'>
            <p className='text-center text-3xl py-12 font-bold'>Welcome to Job Hub – Your Gateway to Career Opportunities!</p>
            <section>
                <p className='text-2xl font-bold py-4 text-gray-700'>Our Mission:</p>
                <p className='text-gray-500'>Empowering individuals to build fulfilling careers and assisting businesses in finding the best talent to thrive in the digital era.</p>
            </section>

            <section>
                <p className='text-2xl font-bold py-4 text-gray-700'>What Sets Us Apart:</p>
                <ol className='space-y-4'>
                    <li>
                        <p className=' font-bold text-gray-600'>Specialized Categories:</p>
                        <p className='text-gray-500'>Dive into the world of possibilities with our three specialized categories – Web Development, Digital Marketing, and Graphic Design.</p>
                    </li>
                    <li>
                        <p className=' font-bold text-gray-600'>Curated Opportunities:</p>
                        <p className='text-gray-500'>We believe in quality over quantity. Our team works tirelessly to curate job listings that match the skills and aspirations of our users.</p>
                    </li>
                    <li>
                        <p className=' font-bold text-gray-600'>User-Friendly Interface:</p>
                        <p className='text-gray-500'>Navigating Job Hub is a breeze. Our user-friendly interface ensures a seamless experience for both job seekers and employers.</p>
                    </li>
                    <li>
                        <p className=' font-bold text-gray-600'>Community Support:</p>
                        <p className='text-gray-500'>Job Hub is more than just a job portal; it's a community. Join us in fostering a supportive environment where professionals can share insights, seek advice, and build valuable connections.</p>
                    </li>
                </ol>
            </section>

            <section>
                <p className='text-2xl font-bold py-4 text-gray-700'>How We Started:</p>
                <p className='text-gray-500'>Job Hub was founded by a team of industry experts who recognized the need for a platform that focuses on the unique demands of the digital job market. We understand the challenges of finding the right talent or the perfect job, and we are here to simplify the process.</p>
            </section>

            <section>
                <p className='text-2xl font-bold py-4 text-gray-700'>Join Us on the Journey:</p>
                <p>Whether you're a visionary entrepreneur, a seasoned professional, or a recent graduate eager to make your mark, Job Hub welcomes you to embark on this journey with us. Let's shape the future of careers together!</p>
            </section>

        </div>
    )
}

export default Details