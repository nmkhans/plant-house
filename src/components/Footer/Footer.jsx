import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/footer.png"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-primary text-white">
            <div>
                <Link to="/">
                    <img className="w-[70px] lg:w-[90px] mb-3" src={logo} alt="footer logo" />
                </Link>
                <p>Plant House.<br />Providing reliable plant since 2023</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Contact us</span>
                <a className="link link-hover">For Queries: 01700540523</a>
                <a className="link link-hover">For Information: 01700540523</a>
                <a className="link link-hover">Email: afrinarashidbadhon1@gmail.com</a>
                <a className="link link-hover">Facebook: Afrina Rashid</a>
            </div>
        </footer>
    );
};

export default Footer;