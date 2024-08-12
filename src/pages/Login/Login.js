import React from 'react'
import './login.css'
import Meta from '../../components/Meta/Meta'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            {/* <Meta title={"Login"} />
            <BreadCrumb title="Login" /> */}
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'> Login</h3>
                                <form action='' className='d-flex flex-column gap-15 '>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder='Email'
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
                                    <div>
                                        <Link to="/forgot-password">Fogot Password?</Link>
                                        <div className='mt-3 d-flex justify-content-center gap-13 align-items-center '>
                                            <button className='button border-0' type='submit'>Login</button>
                                            <Link to='/signup' className='button signup'>SignUp</Link>
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
