import React, { useEffect } from 'react';
import { Flex, Rate } from 'antd';
import './productcard.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../App/cartSlice';
import { fetchProducts } from '../../App/productSlice';
import { addItem as addWishlistItem } from '../../App/wishlistSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard({ product, grid }) {
    const publicUrl = process.env.PUBLIC_URL;
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (!product) {
        return null;
    }

    const handleAddToCart = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addItem(product));
        toast.success("Added to Cart Successfully!");
    };

    const handleAddToWishlist = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addWishlistItem(product));
        toast.success("Added to Wishlist Successfully!");
        console.log(toast.success("Added to Wishlist Successfully!"))
    };
    return (
        <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"} `}>
            <Link to={`/product/${product.id}`} className='product-card position-relative'>
                <div className='product-image'>
                    <img
                        src={`${publicUrl}/${product.image1}`}
                        className='img-fluid zoom-image'
                        alt='product image'
                    />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>{product.brand}</h6>
                    <h5 className='product-name'>{product.name}</h5>
                    <Flex className='my-3' gap="middle" vertical>
                        <Flex gap="middle">
                            <Rate disabled defaultValue={5} />
                        </Flex>
                    </Flex>
                    <p className='price'>${product.price}</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <img src={`${publicUrl}/images/wish.svg`} alt='wishlist icon' onClick={handleAddToWishlist} />
                        <img src={`${publicUrl}/images/add-cart.svg`} alt='add to cart' onClick={handleAddToCart} />
                    </div>
                </div>
            </Link>
        </div>
    );
}
