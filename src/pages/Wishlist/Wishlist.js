import React from 'react';
import './wishlist.css';
import Meta from '../../components/Meta/Meta';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../App/wishlistSlice';
import { MdDeleteForever } from 'react-icons/md';

export default function Wishlist() {
    const publicUrl = process.env.PUBLIC_URL;
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <>
            {/* <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" /> */}
            <div className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2 className="wishlist-title text-center mb-4">Your Wishlist</h2>
                            <div className='d-flex gap-10 flex-wrap justify-content-center'>
                                {wishlistItems.length > 0 ? (
                                    wishlistItems.map((product) => (
                                        <div key={product.id} className='wishlist-card position-relative'>
                                            <MdDeleteForever 
                                                className='remove-icon'
                                                onClick={() => handleRemove(product.id)}
                                            />
                                            <div className='wishlist-card-image'>
                                                <img src={`${publicUrl}/${product.image1}`}  className='img-fluid' alt={product.name} />
                                            </div>
                                            <div className='py-3 px-3'>
                                                <h5 className='name'>{product.name}</h5>
                                                <h6 className='price'>${product.price}</h6>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center">Your wishlist is currently empty.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
