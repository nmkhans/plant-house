import React from 'react';
import { useAuthUser } from 'react-auth-kit'
import { useSignOut } from 'react-auth-kit'
import { Link } from 'react-router-dom';

const AccountMenu = () => {
    const auth = useAuthUser()
    const user = auth();
    const signOut = useSignOut()

    return (
        <div className="bg-white shadow-md rounded border w-[300px] py-5 z-50">
            <div className="text-center border-b pb-2">
                <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.image} alt="profile image" />
                    </div>
                </div>
                <h3 className="mt-2">{user.name}</h3>
            </div>
            <div>
                <ul className="text-center mt-3">
                    <li className="p-2 cursor-pointer">
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li className="p-2 cursor-pointer">
                        <Link to="/user">Dashboard</Link>
                    </li>
                    <li
                        onClick={() => signOut()}
                        className="p-2 cursor-pointer"
                    >Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default AccountMenu;