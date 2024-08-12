import React from 'react';
import './compareproduct.css';
import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

export default function CompareProduct() {
    return (
        <>
            {/* <Meta title={"Compare Products"} />
            <BreadCrumb title="Compare Products" /> */}
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='cross position-absolute img-fluid'
                                />
                                <div className='product-card-image'>
                                    <img src={`${publicUrl}/images/watch.jpg`} alt='watch' />
                                </div>
                                <div className='compare-card-details'>
                                    <h5 className='title'>
                                        Honner T1 7.0 1GB RAM 8GN ROM 7 Inch With Wi-Fi+3G Tablet
                                    </h5>
                                    <h6 className='price mb-3'>S100</h6>
                                    <div className='product-detail'>
                                        <h5>Brand</h5>
                                        <p>Hevels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Type</h5>
                                        <p>Hevels</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Avaibility</h5>
                                        <p>Hevels</p>
                                    </div>
                                   
                                    <div className='product-detail'>
                                        <h5>Size</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}
