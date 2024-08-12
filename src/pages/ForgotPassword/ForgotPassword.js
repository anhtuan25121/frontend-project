import React from 'react'
import './forgotpassword.css'
import Meta from '../../components/Meta/Meta'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    return (
        <>
            {/* <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" /> */}
            <div className='forgot-password-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='forgot-password-card'>
                                <h3 className='text-center mb-3'> Forgot Your Password</h3>
                                <p className='text-center mt-2 mb-3'>
                                    We will send you an email to reset your password
                                </p>
                                <form action='' className='d-flex flex-column gap-15 '>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder='Email'
                                            className='form-control'
                                        />
                                    </div>
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-13 align-items-center '>
                                            <button className='button border-0'>Submit</button>
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
