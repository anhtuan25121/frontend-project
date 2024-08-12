import React from 'react'
import './singleblog.css'
import Meta from '../../components/Meta/Meta'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import { Link } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5";

export default function SingleBlog() {
  return (
    <>
      {/* <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" /> */}
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 '> 
              <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                <IoArrowBack className='fs-4'/>Go back to Blogs</Link>
                <h3 className='title'>
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src='images/blog-1.jpg' className="img-fluid w-100" alt='blog'/>
                <p>
                to ensure that the Cancel button appears on a new line below the Submit button,
                 you can modify the CSS for the .forgot-password-card or adjust the structure within 
                 the form. Heres how you can do it:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
