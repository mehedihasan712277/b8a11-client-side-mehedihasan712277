import React from 'react'
import { FcList, FcFlowChart, FcFilledFilter } from "react-icons/fc";

const Choose = () => {
    return (
        <>
            <div className='px-4 md:px-12 lg:px-4 xl:px-44'>
                <p className='text-center text-gray-600 text-3xl font-bold py-12'>Why to Choose <span className='text-blue-700'>Job Hub</span></p>
                <div className='flex justify-center flex-wrap gap-4 mb-24'>
                    <div className='flex flex-col items-center w-72 ml:w-96 md:w-80 lg:w-72'>
                        <div className='flex justify-center'>
                            <FcList className='h-20 w-20 ml:h-24 ml:w-24 lg:h-20 lg-20' />
                        </div>
                        <p className='font-bold text-blue-700 ml:text-xl lg:text-base pt-4 pb-2'>Extensive Job Listings</p>
                        <p className='text-center ml:text-sm text-gray-500'>Job seekers are likely to choose Job Hub as it offers a vast and diverse range of job listings across various industries and sectors</p>
                    </div>

                    <div className='flex flex-col items-center w-72 ml:w-96 md:w-80 lg:w-72'>
                        <div className='flex justify-center'>
                            <FcFilledFilter className='h-20 w-20 ml:h-24 ml:w-24 lg:h-20 lg-20' />
                        </div>
                        <p className='font-bold text-blue-700 ml:text-xl lg:text-base pt-4 pb-2'>Advanced Filtering Options</p>
                        <p className='text-center ml:text-sm text-gray-500'> Job Hub offers advanced search and filtering options and allow users to tailor their searches based on specific criteria</p>
                    </div>

                    <div className='flex flex-col items-center w-72 ml:w-96 md:w-80 lg:w-72'>
                        <div className='flex justify-center'>
                            <FcFlowChart className='h-20 w-20 ml:h-24 ml:w-24 lg:h-20 lg-20' />
                        </div>
                        <p className='font-bold text-blue-700 ml:text-xl lg:text-base pt-4 pb-2'>User-Friendly Interface</p>
                        <p className='text-center ml:text-sm text-gray-500'>Job Hub stands out by providing an intuitive and easy-to-navigate platform, a clean design, straightforward search functionality</p>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <FcFlowChart /> */ }
{/* <FcFilledFilter /> */ }
export default Choose