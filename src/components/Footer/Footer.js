import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './footer.css'
import { Link } from 'react-router-dom';
import { AiFillYoutube, AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillTikTok, AiFillMail, AiOutlineHome   } from "react-icons/ai";//Ant design icons
import { IoCallSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>

            <div className='col-7'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  <AiOutlineHome className='mt-2 d-block mb-0 text-white d-flex gap-15 align-items-center'/>
                  Hno: 135 Hai Ba Trung, Ben Nghe Ward, Ho Chi Minh City, Vietnam
                </address>
                <a href='tel: +84 123456789' className='mt-2 d-block mb-0 fs-6 text-white d-flex gap-15 align-items-center'>
                  <IoCallSharp className='mx-1 fs-5'/>
                  +84 123456789
                </a>
                <a href='mailto: natuan1802@gmail.com' className='mt-2 d-block mb-0 fs-6 text-white d-flex gap-15 align-items-center'>
                  <AiFillMail className='mx-1 fs-5'/>
                  natuan1802@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className="text-white" href='' >
                    <AiFillFacebook className='fs-3' />
                  </a>
                  <a className="text-white" href='' >
                    <AiFillInstagram className='fs-3'/>
                  </a>
                  <a className="text-white" href='' >
                    <AiFillTikTok className='fs-3'/>
                  </a>
                  <a className="text-white" href='' >
                    <AiFillTwitterCircle className='fs-3'/>
                  </a>
                  <a className="text-white" href='' >
                    <AiFillYoutube className='fs-3'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-information d-flex flex-column'>
                <Link className='text-white py-2 mb-1 fs-6'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1 fs-6'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1 fs-6'>Term & Conditions</Link>
                <Link className='text-white py-2 mb-1 fs-6'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-account d-flex flex-column'>
                <Link className='text-white py-2 mb-1 fs-6'>About Us</Link>
                <Link className='text-white py-2 mb-1 fs-6'>Faq</Link>
                <Link className='text-white py-2 mb-1 fs-6'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Link</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1 fs-6'>Laptops</Link>
                <Link className='text-white py-2 mb-1 fs-6'>Headphones</Link>
                <Link className='text-white py-2 mb-1 fs-6'>Tablet</Link>
                <Link className='text-white py-2 mb-1 fs-6'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                @ {new Date().getFullYear()}: Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
