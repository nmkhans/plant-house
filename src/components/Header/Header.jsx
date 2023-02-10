import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom"
import { FiShoppingCart, FiSearch } from "react-icons/fi"
import { RxAvatar } from "react-icons/rx"
import { AiOutlineMenu } from "react-icons/ai"
import logo from "../../assets/logo.png"
import Cart from '../cart/Cart';

const Header = ({ children }) => {
    const [toggleSearch, setToggleSearch] = useState(false)
    const cartRef = useRef(null)

    const PageLinks = () => {
        return (
            <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </>
        )
    }

    const handleCartToggle = () => {
        if (cartRef.current.classList.contains("translate-x-full")) {
            cartRef.current.classList.remove("translate-x-full")
        } else {
            cartRef.current.classList.add("translate-x-full")
        }
    }

    return (
        <header>
            <div className="drawer drawer-end overflow-x-hidden">
                <input id="header-nav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col overflow-x-hidden">
                    <div className="flex justify-between items-center w-full navbar shadow-md px-5">
                        <div className="sm:flex-1 md:flex-1 lg:flex-none px-2 mx-2">
                            <Link to="/">
                                <img className="w-[80px] lg:w-[100px]" src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <PageLinks />
                            </ul>
                        </div>
                        <div className="flex items-center justify-between basis-[200px] lg:basis-[280px] relative">
                            <span
                                onClick={handleCartToggle}
                                className="inline-flex items-center cursor-pointer"
                            >
                                <FiShoppingCart className="text-lg" />
                                <span className="text-md ml-2">Cart</span>
                            </span>
                            <span
                                onClick={() => setToggleSearch(!toggleSearch)}
                                className="inline-flex  items-cetner cursor-pointer">
                                <FiSearch className="text-lg" />
                                <span className="text-md ml-2">Search</span>
                            </span>
                            <span
                                className="hidden lg:inline-flex items-center cursor-pointer">
                                <RxAvatar className="text-lg" />
                                <span className="text-md ml-2">Account</span>
                            </span>
                            {toggleSearch && (
                                <div className="absolute top-10 right-0 border p-2 bg-white shadow-md w-[300px] lg:w-[500px] rounded-lg">
                                    <input type="text" placeholder="Type here" className="input w-full" />
                                </div>
                            )}
                            <div ref={cartRef} className="bg-white w-[600px] h-screen absolute -top-[20px] translate-x-full transform transition-transform shadow-md z-50">
                                <Cart handleCartToggle={handleCartToggle} />
                            </div>
                            <div className="flex-none lg:hidden">
                                <label
                                    htmlFor="header-nav"
                                    className="inline-block cursor-pointer text-xl mt-2"
                                >
                                    <AiOutlineMenu />
                                </label>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="header-nav" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        <PageLinks />
                        <div>
                            profile here
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;