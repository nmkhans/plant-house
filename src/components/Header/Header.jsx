import React from 'react';
import {FiShoppingCart, FiSearch} from "react-icons/fi"
import {RxAvatar} from "react-icons/rx"

const Header = () => {
    return (
        <header>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="flex justify-evenly items-center w-full navbar shadow-md py-5">
                        <div className="sm:flex-1 md:flex-1 lg:flex-none px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                                <li><a>Navbar Item 2</a></li>
                                <li><a>Navbar Item 2</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul>
                        </div>
                        <div className="flex justify-between text-xl basis-[100px]">
                            <span><FiShoppingCart /></span>
                            <span><FiSearch /></span>
                            <span><RxAvatar /></span>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    Content
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;