import React from "react";
import { Outlet, Link } from "react-router-dom";

const Admin = () => {
  return (
    <main className="py-5">
      <div className="container mx-auto px-5">
        <div className="drawer drawer-mobile">
          <input id="admin-sidebar" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="admin-sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-300">
              <li>
                <Link to="dashboard">Dasboard</Link>
              </li>
              <li>
                <Link to="user/all">Users</Link>
              </li>
              <li>
                <Link to="orders">Orders</Link>
              </li>
              <li>
                <Link to="products">Products</Link>
              </li>
              <li>
                <Link to="product/create">Create Products</Link>
              </li>
              <li>
                <Link to="categories">Category</Link>
              </li>
              <li>
                <Link to="category/create">Create Category</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
