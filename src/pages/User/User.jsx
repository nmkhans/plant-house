import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuthUser } from 'react-auth-kit';

const User = () => {
    const auth = useAuthUser()
    const user = auth()

    return (
        <main className="py-5">
            <div className="container mx-auto px-5">
                <div className="drawer drawer-mobile">
                    <input id="user-sidebar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet />
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="user-sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-300">
                            <li>
                                <Link to="dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="order">Orders</Link>
                            </li>
                            {user?.seller && (
                                <li>
                                    <Link to="seller-dashboard">Seller Dashboard</Link>
                                </li>
                            )}
                        </ul>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default User;