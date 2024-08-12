import React from 'react'
import './signup.css'
import Meta from '../../components/Meta/Meta'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            {/* <Meta title={"Signup"} />
            <BreadCrumb title="Signup" /> */}
            <div className='signup-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='signup-card'>
                                <h3 className='text-center mb-3'> Sign Up</h3>
                                <form action='' className='d-flex flex-column gap-15 '>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder='Name'
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder='Email'
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            placeholder='Mobile Number'
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder='Password'
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type="password"
                                            name="confirm-password"
                                            placeholder='Confirm Password'
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-13 align-items-center '>
                                            <button className='button border-0' type='submit'>Sign Up</button>
                                            <Link to='/login' className='button cancel'>Cancel</Link>

                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
