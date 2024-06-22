import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../auxiliary/AuthProvider'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [data, setData] = useState(null)
    useEffect(() => {
        if (user && !(user.displayName)) {
            fetch(`https://b8a11-server-side-mehedihasan712277.vercel.app/user/${user.email}`)
                .then(res => res.json())
                .then(res => {
                    setData(res);
                })
        }
    }, [user])
    // console.log(data);
    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log("logged Out");
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <div className='px-4 sm:px-8 lg:px-16 xl:px-20'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div>
                            <div className='h-12 ml:h-20 w-12 ml:w-20'>
                                <img src={logo} alt="logo" className='h-12 ml:h-20 w-12 ml:w-20' />
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-6">
                            <NavLink className={({ isActive }) => isActive ? "text-blue-700 font-bold transition-all" : "text-gray-600 font-bold hover:text-blue-300 duration-150"} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-blue-700 font-bold transition-all" : "text-gray-600 font-bold hover:text-blue-300 duration-150"} to="/addJob">Add Job</NavLink>
                            {
                                user && (
                                    <>
                                        <NavLink className={({ isActive }) => isActive ? "text-blue-700 font-bold transition-all" : "text-gray-600 font-bold hover:text-blue-300 duration-150"} to={`/postedJobs/${user?.uid}`}>My Posted Jobs</NavLink>
                                        <NavLink className={({ isActive }) => isActive ? "text-blue-700 font-bold transition-all" : "text-gray-600 font-bold hover:text-blue-300 duration-150"} to="/bids">My Bids</NavLink>
                                        <NavLink className={({ isActive }) => isActive ? "text-blue-700 font-bold transition-all" : "text-gray-600 font-bold hover:text-blue-300 duration-150"} to="/bidRequests">Bid Request</NavLink>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                    <div className="navbar-end flex flex-wrap">
                        {
                            user ?
                                <>
                                    <div className='flex gap-2 items-center'>
                                        <div>
                                            <button className='btn btn-outline btn-primary btn-sm hidden lg:block' onClick={handleLogOut}>Log out</button>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <div className='h-8 md:h-16 w-8 md:w-16 rounded-full'>
                                                <img src={user.photoURL || data?.url} alt="img" className='h-8 md:h-16 w-8 md:w-16 rounded-full' />
                                            </div>
                                            <p className='text-xs md:text-[16px] text-center'>
                                                {
                                                    user.displayName || data?.name
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </>
                                :
                                <div className='space-x-1'>
                                    <NavLink className={({ isActive }) => isActive ? "text-blue-500" : "hover:underline text-gray-600"} to="/login" >Log in</NavLink>
                                    <span>/</span>
                                    <NavLink className={({ isActive }) => isActive ? "text-blue-500" : "hover:underline text-gray-600"} to="/register">Register</NavLink>
                                </div>
                        }
                    </div>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-outline ml-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 -ml-36 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/addJob">Add Job</Link></li>
                            {
                                user && (
                                    <>
                                        <li><Link to={`/postedJobs/${user?.uid}`}>My Posted Jobs</Link></li>
                                        <li><Link to="/bids">My Bids</Link></li>
                                        <li><Link to="/bidRequests">Bid Request</Link></li>
                                        <button className='btn btn-outline btn-primary btn-sm' onClick={handleLogOut}>Log out</button>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar