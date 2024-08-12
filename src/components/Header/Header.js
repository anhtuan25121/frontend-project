import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './header.css'


export default function Header() {
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                Hotline:
                                <a className='text-white' href="tel: +84 123456789">+84 123456789</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-2'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h3>
                                <Link to='/' className='text-white'>
                                    <span className='text-yellow'>Tech</span>
                                    <span className='text-red'>.Pro</span>
                                </Link>
                            </h3>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-around'>

                                <div className="link-item">
                                    <Link className='d-flex align-items-center gap-10 text-white' to="/wishlist">
                                        <img src={`${publicUrl}/images/wishlist.svg`} alt='wishlist' />
                                        <p className='mb-0'>
                                            Favourite <br /> Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div className="link-item">
                                    <Link className='d-flex align-items-center gap-10 text-white' to="/login" >
                                        <img src={`${publicUrl}/images/user.svg`} alt='user' />
                                        <p className='mb-0'>
                                            Login <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div className="link-item">
                                    <Link className='d-flex align-items-center gap-10 text-white' to="/cart">
                                        <img src={`${publicUrl}/images/cart.svg`} alt='cart' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center justify-content-between'>

                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-30'>
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/product">Our Store</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>


                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src='images/menu.svg' alt='' />
                                            <span className='d-inline-block'>Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item text-white" href="#">Smartphone</a></li>
                                            <li><a className="dropdown-item text-white" href="#">Laptop</a></li>
                                            <li><a className="dropdown-item text-white" href="#">Smartwatch</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
