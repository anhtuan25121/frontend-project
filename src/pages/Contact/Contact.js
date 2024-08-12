import React from 'react'
import './contact.css'
import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { IoCallSharp, IoInformationCircleOutline } from "react-icons/io5";
import { Button, Form, Input, InputNumber } from 'antd';

export default function Contact() {
  return (
    <>
      {/* <Meta title={"Contact"} />
      <BreadCrumb title="Contact" /> */}
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.377875562203!2d106.69594667592511!3d10.782343189366758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36156267c7%3A0xfb2f71de82868922!2zMTM1IEhhaSBCw6AgVHLGsG5nLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1723163408269!5m2!1svi!2s"
                width="600"
                height="450"
                className='w-100'
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5 '>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div className='ms-3 mt-2'>
                  <h3 className='contact-title mb-4'>Contact Us</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        className='w-100 mb-2'
                        cols="30"
                        rows="4"
                        placeholder='Comments'></textarea>
                      <div>
                        <button className='button border-0 mb-3 ms-2'>Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='mt-2'>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Hno: 135 Hai Ba Trung, Ben Nghe Ward, Ho Chi Minh City, Vietnam
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <IoCallSharp className='fs-5' />
                        <a href='tel: +84 123456789'>+84 123456789</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <IoInformationCircleOutline className='fs-5' />
                        <a href='mailto:natuan1802@gmail.com'>
                          natuan1802@gmail.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <p className='mb-0'>Monday - Friday 10AM to 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
