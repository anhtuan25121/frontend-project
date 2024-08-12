import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import './ourstore.css';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Meta from '../../components/Meta/Meta';
import { fetchProducts } from '../../App/productSlice';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Rate, Select } from 'antd';

const { Option } = Select;

export default function OurStore() {
    const publicUrl = process.env.PUBLIC_URL;
    const [grid, setGrid] = useState(4);
    const dispatch = useDispatch();
    const { items: products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleChange = (value) => {
        console.log(`Selected ${value}`);
    };

    const handleGridChange = (value) => {
        setGrid(value);
    };

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;  
    const offset = currentPage * itemsPerPage;
    const currentItems = products.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            {/* <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" /> */}
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            {/* Filter cards */}
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 d-block'>Sort By:</p>
                                        <Select
                                            defaultValue={"best-selling"}
                                            style={{ width: 200 }}
                                            onChange={handleChange}
                                        >
                                            {/* Sorting options */}
                                        </Select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalprodcuts mb-0'>{products.length} Products</p>
                                        <div className='grid d-flex align-items-center gap-10'>
                                            <img src={`${publicUrl}/images/gr4.svg`} className='d-block img-fluid' onClick={() => handleGridChange(3)} alt='grid' />
                                            <img src={`${publicUrl}/images/gr3.svg`} className='d-block img-fluid' onClick={() => handleGridChange(4)} alt='grid' />
                                            <img src={`${publicUrl}/images/gr2.svg`} className='d-block img-fluid' onClick={() => handleGridChange(6)} alt='grid' />
                                            <img src={`${publicUrl}/images/gr.svg`} className='d-block img-fluid' onClick={() => handleGridChange(12)} alt='grid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-list pb-5'>
                                <div className='d-flex gap-10 flex-wrap'>
                                    {currentItems.map((product) => (
                                        <ProductCard key={product.id} product={product} grid={grid} />
                                    ))}
                                </div>
                                <ReactPaginate
                                    previousLabel={"← Previous"}
                                    nextLabel={"Next →"}
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                    containerClassName={"pagination"}
                                    activeClassName={"active"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
