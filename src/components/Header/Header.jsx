import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { FiShoppingCart, FiSearch } from "react-icons/fi"
import { RxAvatar } from "react-icons/rx"
import { AiOutlineMenu } from "react-icons/ai"
import logo from "../../assets/logo.png"

const Header = () => {
    const [toggleSearch, setToggleSearch] = useState(false)

    return (
        <header>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="flex justify-evenly items-center w-full navbar shadow-md">
                        <div className="sm:flex-1 md:flex-1 lg:flex-none px-2 mx-2">
                            <Link to="/">
                                <img className="w-[100px]" src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                                <li><a>Navbar Item 2</a></li>
                                <li><a>Navbar Item 2</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-evenly text-xl basis-[130px] lg:basis-[200px] relative">
                            <span
                                className="inline-block cursor-pointer"
                            >
                                <FiShoppingCart />
                            </span>
                            <span
                                onClick={() => setToggleSearch(!toggleSearch)}
                                className="inline-block cursor-pointer">
                                <FiSearch />
                            </span>
                            <span
                                className="hidden lg:inline-block cursor-pointer">
                                <RxAvatar />
                            </span>
                            {toggleSearch && (
                                <div className="absolute top-10 right-0 border p-2 bg-white shadow-md w-[300px] lg:w-[500px] rounded-lg">
                                    <input type="text" placeholder="Type here" className="input w-full" />
                                </div>
                            )}
                            <div className="flex-none lg:hidden">
                                <label
                                    htmlFor="my-drawer-3"
                                    className="inline-block cursor-pointer text-xl"
                                >
                                    <AiOutlineMenu />
                                </label>
                            </div>
                        </div>
                    </div>
                    Content
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
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