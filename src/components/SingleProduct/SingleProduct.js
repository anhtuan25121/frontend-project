import React, { useState, useEffect } from 'react';
import './singleproduct.css';
import Meta from '../Meta/Meta';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import { Rate } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../App/productSlice';
import { addItem as addCartItem } from '../../App/cartSlice';
import { addItem as addWishlistItem } from '../../App/wishlistSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SingleProduct() {
    const publicUrl = process.env.PUBLIC_URL;
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const products = useSelector((state) => state.products.items);
    const product = products.find(p => p.id === id);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAddToCart = () => {
        dispatch(addCartItem({ ...product, quantity: parseInt(quantity) }));
        toast.success("Added to Cart Successfully!");
    };

    const handleAddToWishlist = () => {
        dispatch(addWishlistItem(product));
        toast.success("Added to Wishlist Successfully!");
    };

    const handleBuyNow = () => {
        handleAddToCart();
        navigate('/cart');
    };

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        
        <>
            {/* <Meta title={product.name} />
            <BreadCrumb title={product.name} /> */}
            <ToastContainer />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div className='zoom-container'>
                                    <img className='img-fluid zoomable' src={`${publicUrl}/${product.image1}`} alt='Product image 1' />
                                </div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img className='img-fluid zoomable' src={`${publicUrl}/${product.image2}`} alt='Product image 2' />
                                </div>
                                <div>
                                    <img className='img-fluid zoomable' src={`${publicUrl}/${product.image3}`} alt='Product image 3' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>{product.name}</h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>${product.price}</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <Rate className='rate-star' disabled defaultValue={5} />
                                        <p className='mb-0 t-review'>( 2 Reviews )</p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a Review</a>
                                </div>
                                <div className='border-bottom'>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Brand :</h3>
                                        <p className='product-data'>{product.brand}</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Category :</h3>
                                        <p className='product-data'>{product.category}</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-10 my-2'>
                                        <h3 className='product-heading'>Availability :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-15  mt-2 mb-3'>
                                        <h3 className='product-heading'>Quantity:</h3>
                                        <div className=''>
                                            <input
                                                type='number'
                                                className='form-control'
                                                min={1}
                                                max={10}
                                                style={{ width: "80px" }}
                                                id='quantity'
                                                value={quantity}
                                                onChange={handleQuantityChange}
                                            />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button
                                                className='add-to-cart-button border-0'
                                                type='button'
                                                onClick={handleAddToCart}
                                            >
                                                Add to Cart
                                            </button>
                                            <button
                                                className='buy-button border-0'
                                                type='button'
                                                onClick={handleBuyNow}
                                            >
                                                Buy It Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a onClick={handleAddToWishlist}><FaRegHeart className='add-to-wishlist fs-5 me-2' /> Add to Wishlist</a>
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
