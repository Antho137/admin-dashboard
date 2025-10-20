import { useState } from "react";
import { NavHashLink, HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSolidCog, BiSolidDashboard, BiSolidDetail, BiSolidReport } from "react-icons/bi";


const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-55 w-screen h-18 bg-gradient-to-r from-blue-900 to-blue-500 text-blue-200 lg:h-screen lg:w-40'>
        <div className="flex flex-row justify-between items-center lg:flex-col lg:gap-0 py-4 px-5 lg:pt-2 logo">
            <div>
                <h1 className='text-center text-white text-xl sm:text-md lg:border-b-2 lg:border-blue-300 font-medium '>Admin
                    <span className='lg:block text-yellow-500 pb-2 leading-5'> Dashboard</span>
                </h1>
            </div>
            <div className="lg:hidden">
                <button className="text-white pt-1" onClick={handleMenu}>
                    {!isMenuOpen ? (
                        <FaBars className="fas fa-bars text-white text-2xl" />
                    ) : (
                        <FaTimes className="fas fa-times text-white text-2xl" />
                    )}
                </button>
            </div>
            <ul className='hidden text-sm lg:pt-6 xl:text-lg lg:flex flex-col justify-start items-start gap-5 font-light sidebar'>
                <li className='flex justify-start items-center gap-1'>
                    <BiSolidDashboard />
                    <NavHashLink smooth 
                        to="/#" 
                        className={({ isActive }) => isActive
                            ? "bg-yellow-500 text-white px-3 pt-0.5 pb-1.5 rounded"
                            : "text-white"
                        }
                    >
                        Dashboard
                    </NavHashLink>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiSolidDetail />
                    <Link smooth 
                        to="/#event" 
                        className="px-2"
                    >
                        Events
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiSolidReport />
                    <Link smooth  
                        to="/#report" 
                        className="px-2"
                    >
                        Reports
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1'>
                    <BiSolidCog />
                    <Link smooth 
                        to="/" 
                        className="px-2"
                    >
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
        <hr />
        <div className='hidden lg:block'>
            <p className="bg-white text-center text-yellow-700 text-sm m-5 p-2 uppercase rounded-sm">We implify your booking process and we make your event enjoyable.</p>
        </div>
        {isMenuOpen ? (
            <ul className="bg-blue-300 text-sm mt-4 px-5 py-2 flex flex-col justify-start items-start gap-5 lg:hidden menuOpen">
                <li className='flex justify-start items-center gap-1 my-1'>
                    <BiSolidDashboard className="text-blue-900" />
                    <NavHashLink smooth 
                        to="/"
                        className={({ isActive }) => isActive
                            ? "text-yellow-900"
                            : "text-orange-600"
                        }
                    >
                        Dashboard
                    </NavHashLink>
                </li>
                <li className='flex justify-start items-center gap-1 my-1'>
                    <BiSolidDetail className="text-blue-900" />
                    <Link 
                        to="/#event" 
                        className="text-blue-900"
                    >
                        Events
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1 my-1'>
                    <BiSolidReport className="text-blue-900" />
                    <Link smooth 
                        to="/#report" 
                        className="text-blue-900"
                    >
                        Reports
                    </Link>
                </li>
                <li className='flex justify-start items-center gap-1 my-1'>
                    <BiSolidCog className="text-blue-900" />
                    <Link smooth 
                        to="/" 
                        className="text-blue-900"
                    >
                        Settings
                    </Link>
                </li>
            </ul>
      ) : null}
    </div>
  )
}

export default Sidebar;