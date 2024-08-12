import React from 'react';
import './cart.css';
import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart  } from '../../App/cartSlice';

export default function Cart() {
    const publicUrl = process.env.PUBLIC_URL;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <>
            {/* <Meta title={"Cart"} />
            <BreadCrumb title="Cart" /> */}
            <section className='cart-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='cart-header py-3 d-flex justify-content-between align-content-center'>
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                            {cartItems.map((item) => (
                                <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center' key={item.id}>
                                    <div className='cart-col-1 d-flex gap-15 align-items-center'>
                                        <div className='w-25'>
                                            <img src={`${publicUrl}/${item.image1}`}  className='img-fluid' alt='product image' />
                                        </div>
                                        <div className='w-75'>
                                            <h5>{item.name}</h5>
                                        </div>
                                    </div>
                                    <div className='cart-col-2'>
                                        <h5 className='price'>${item.price}</h5>
                                    </div>
                                    <div className='cart-col-3 d-flex gap-15 align-items-center'>
                                        <div>
                                            <input
                                                className='form-control'
                                                type='number'
                                                min={1}
                                                max={10}
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                            />
                                        </div>
                                        <div>
                                            <MdDeleteForever className='text-danger' onClick={() => handleRemoveItem(item.id)} />
                                        </div>
                                    </div>
                                    <div className='cart-col-4'>
                                        <h5 className='total-price'>${(item.price * item.quantity).toFixed(2)}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-12 py-2 mt-4'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                <Link to='/product' className='shopping-button'>Continue Shopping</Link>
                                <Link to='#' onClick={handleClearCart} className='clear-button ms-5'>Clear</Link>
                                </div>
                                <div className='d-flex flex-column align-items-baseline'>
                                    <h4>SubTotal: ${calculateTotal().toFixed(2)}</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link to='/checkout' className='checkout-button'>Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
