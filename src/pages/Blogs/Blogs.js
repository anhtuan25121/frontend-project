import React from 'react'
import Meta from '../../components/Meta/Meta';
import './blogs.css'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import BlogCard from '../../components/BlogCard/BlogCard';

export default function Blogs() {
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <>
            {/* <Meta title={"Blogs"} />
            <BreadCrumb title="Blogs" /> */}
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shope By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Smartwatch</li>
                                        <li>Smartphone</li>
                                        <li>Tablet</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-9 '>
                            <div className='row'>
                               <div className='col-6 mb-4'>
                                <BlogCard/>
                               </div>
                               <div className='col-6 mb-4'>
                                <BlogCard/>
                               </div>
                               <div className='col-6 mb-4'>
                                <BlogCard/>
                               </div>
                               <div className='col-6 mb-4'>
                                <BlogCard/>
                               </div>
                               <div className='col-6 mb-4'>
                                <BlogCard/>
                               </div>
                               <div className='col-6 mb-4'>
                                <BlogCard/>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
