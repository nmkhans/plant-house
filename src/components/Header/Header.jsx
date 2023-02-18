import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { useIsAuthenticated } from 'react-auth-kit';
import { FiShoppingCart, FiSearch } from "react-icons/fi"
import { RxAvatar } from "react-icons/rx"
import { AiOutlineMenu } from "react-icons/ai"
import { useSelector } from 'react-redux';
import logo from "../../assets/logo.png"
import Cart from '../cart/Cart';
import SearchBox from '../SearchBox/SearchBox';
import AccountMenu from '../AccountMenu/AccountMenu';
import { useAuthUser } from 'react-auth-kit'

function cartTotal(cart) {
    let quantity = 0
    for (let item in cart) {
        quantity += cart[item].quantity
    }

    return quantity
}

const Header = ({ children }) => {
    const [toggleSearch, setToggleSearch] = useState(false)
    const [accountMenu, setAccountMenu] = useState(false);
    const cartRef = useRef(null)
    const cart = useSelector(state => state.cart.value)
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()
    const auth = useAuthUser()
    const user = auth()

    const PageLinks = () => {
        return (
            <>
                <li>
                    <Link className="hover:bg-transparent" to="/">Home</Link>
                </li>
                <li>
                    <Link className="hover:bg-transparent" to="/shop">Shop</Link>
                </li>
                <li>
                    <Link className="hover:bg-transparent" to="/">About</Link>
                </li>
                <li>
                    <Link className="hover:bg-transparent" to="/">Contact</Link>
                </li>
            </>
        )
    }

    const handleCartToggle = () => {
        if (cartRef.current.classList.contains("-right-[2000px]")) {
            cartRef.current.classList.remove("-right-[2000px]")
            cartRef.current.classList.add("-right-[20px]")
        } else {
            cartRef.current.classList.remove("-right-[20px]")
            cartRef.current.classList.add("-right-[2000px]")
        }
    }

    return (
        <header>
            <div className="drawer drawer-end overflow-x-hidden">
                <input id="header-nav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col overflow-x-hidden">
                    <div className="bg-white flex justify-between items-center navbar shadow-md px-5 py-5 lg:py-10 sticky top-0 left-0 right-0 w-full z-50">
                        <div className="sm:flex-1 md:flex-1 lg:flex-none px-2 mx-2">
                            <Link to="/">
                                <img className="w-[70px] lg:w-[90px]" src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal hover:none">
                                <PageLinks />
                            </ul>
                        </div>
                        <div className="flex items-center justify-between basis-[200px] lg:basis-[280px] relative">
                            <span
                                onClick={handleCartToggle}
                                className="inline-flex items-center cursor-pointer relative"
                            >
                                <span className="badge badge-sm badge-primary text-white absolute left-2 -top-2">{cartTotal(cart)}</span>
                                <FiShoppingCart className="text-lg" />
                                <span className="text-md ml-2">Cart</span>
                            </span>
                            <span
                                onClick={() => setToggleSearch(!toggleSearch)}
                                className="inline-flex  items-cetner cursor-pointer">
                                <FiSearch className="text-lg" />
                                <span className="text-md ml-2">Search</span>
                            </span>
                            {isAuthenticated() ? (
                                <span
                                    onMouseEnter={() => setAccountMenu(true)}
                                    onMouseLeave={() => setAccountMenu(false)}
                                    className="hidden lg:inline-flex items-center cursor-pointer relative">
                                    <RxAvatar className="text-lg" />
                                    <span className="text-md ml-2">Account</span>
                                    {accountMenu && (
                                        <div className="absolute top-6 right-0 z-50">
                                            <AccountMenu />
                                        </div>
                                    )}
                                </span>
                            ) : (
                                <span
                                    onClick={() => navigate("/login")}
                                    className="hidden lg:inline-flex items-center cursor-pointer relative">
                                    <RxAvatar className="text-lg" />
                                    <span className="text-md ml-2">Login</span>
                                </span>
                            )}
                            {toggleSearch && (
                                <SearchBox
                                    setToggleSearch={setToggleSearch}
                                />
                            )}
                            <div ref={cartRef} className="bg-base-300 w-[320px] h-screen absolute -top-[20px] -right-[2000px] shadow-md z-50 overflow-y-scroll">
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
                        {isAuthenticated() ? (
                            <div className="flex justify-center">
                                <AccountMenu />
                            </div>
                        ) : (
                            <div
                                onClick={() => navigate("/login")}
                                className="flex mt-3 items-center cursor-pointer">
                                <RxAvatar className="text-lg" />
                                <span className="text-md ml-2">Login/Register</span>
                            </div>
                        )}
                        {user?.role === "admin" && (
                            <label htmlFor="admin-sidebar" className="btn btn-primary drawer-button lg:hidden mt-5 text-white">Dashboard menu</label>
                        )}
                        {user?.role === "user" && (
                            <label htmlFor="user-sidebar" className="btn btn-primary drawer-button lg:hidden mt-5 text-white">Dashboard menu</label>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;