import React from 'react';

const AccountMenu = () => {
    return (
        <div className="bg-white shadow-md rounded border w-[300px] py-5 absolute top-6 right-0 z-50">
            <div className="text-center border-b pb-2">
                <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <h3 className="mt-2">Moin Khan</h3>
            </div>
            <div>
                <ul className="text-center mt-3">
                    <li className="p-2">Dashboard</li>
                    <li className="p-2">Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default AccountMenu;