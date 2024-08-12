import React from 'react'
import Meta from '../../components/Meta/Meta'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import './resetpassword.css'
import { Link } from 'react-router-dom'

export default function ResetPassword() {
  return (
    <>
        {/* <Meta title={"Reset Password"} />
        <BreadCrumb title="Reset Password"/> */}
        <div className='reset-password-wrapper home-wrapper-2 py-5'>
            <div className='containter-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='reset-password-card'>
                        <h3 className='text-center mb-3'> Reset Password</h3>
                        <form action='' className='d-flex flex-column gap-15 '>
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
                                name="corfim-password"
                                placeholder='Confirm Password'
                                className='form-control'
                                />
                            </div>
                            <div>
                            <div  className='mt-3 d-flex justify-content-center gap-13 align-items-center '>
                                    <button className='button border-0'>Reset password</button>
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
