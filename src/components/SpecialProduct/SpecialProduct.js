import React from 'react'
import { Flex, Rate, Progress, Button } from 'antd';
import './specialproduct.css'
import { Link } from 'react-router-dom';

export default function SpecialProduct() {
    return (
        <>
            <div className='col-6 mb-3'>
                <div className='special-product-card'>
                    <div className='d-flex justify-content-between'>
                        <div >
                            <img src='images/watch.jpg' className='img-fluid' alt='smart' />
                        </div>
                        <div className='special-product-content'>
                            <h5 className='brand'>Havels</h5>
                            <h6 className='title'>
                                Samsung Galaxy Note 10+ Mobile Phone
                            </h6>
                            <Flex className='my-3' gap="middle" vertical>
                                <Flex gap="middle">
                                    <Rate defaultValue={5} />
                                </Flex>
                            </Flex>
                            <p className='price'>
                                <span className='red=p'>$100</span> &nbsp; <strike>$200</strike>
                            </p>
                            <div className='discount-till d-flex align-items-center gap-10'>
                                <p className='mb-0'>
                                    <b>5 </b>days
                                </p>
                                <div className='d-flex align-items-center gap-10'>
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>
                                </div>
                            </div>
                            <div className='prod-count my-3'>
                                <p>Product: 5</p>
                                <Flex gap="small" vertical>
                                    <Progress percent={50} showInfo={false} />
                                </Flex>
                            </div>
                            <Button className='add-cart-button'>Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
