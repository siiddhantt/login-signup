import React from 'react'
import { useNavigate } from "react-router-dom"
import { AiFillHome} from "react-icons/ai";

function Navbar() {
    let navigate = useNavigate();
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        navigate('/');
    }
    return (
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-lg">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex items-center">
                        <img src="./login.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LogMeIn</span>
                    </a>
                    {!localStorage.getItem('token') ?
                        <div className="flex md:order-2 gap-x-2">
                            <a href="/login">
                                <button type="button" className="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 shadow-xl">Log in</button>
                            </a>
                            <a href="/signup">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-xl">Sign up</button>
                            </a>
                        </div> :
                        <div className="flex md:order-2 gap-x-2">
                            <a href="/home">
                            <div className="text-white rounded-full text-2xl px-3 py-2.5 text-center mr-3 md:mr-0 bg-gray-600 hover:bg-gray-700 shadow-xl"><AiFillHome/></div>
                            </a>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-xl" onClick={handleLogout}>Log out</button>
                        </div>
                    }

                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    </div>
                </div>
            </nav>
        
    )
}

export default Navbar
