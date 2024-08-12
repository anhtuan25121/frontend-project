import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Marquee from "react-fast-marquee";
import BlogCard from '../../components/BlogCard/BlogCard';
import Container from '../../components/Container/Container';
import { services } from '../../utils/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  const publicUrl = process.env.PUBLIC_URL;
  const products = useSelector(state => state.products.items);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (

    <>
      <Container class1="slider-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide><img src={`${publicUrl}/images/slider-01.jpg`} alt="Slider 1" /></SwiperSlide>
          <SwiperSlide><img src={`${publicUrl}/images/slider-02.jpg`} alt="Slider 2" /></SwiperSlide>
          <SwiperSlide><img src={`${publicUrl}/images/slider-03.jpg`} alt="Slider 3" /></SwiperSlide>
          <SwiperSlide><img src={`${publicUrl}/images/slider-04.jpg`} alt="Slider 4" /></SwiperSlide>
          <SwiperSlide><img src={`${publicUrl}/images/slider-06.jpg`} alt="Slider 5" /></SwiperSlide>
        </Swiper>
      </Container>
      <Container class1='home-wrapper-2 py-5' data-aos="fade-up" >
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={`${publicUrl}/${i.image}`} alt='services' />
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagsline}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Container class1='marquee-wrapper py-5 home-wrapper-2' data-aos="fade-up">
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src={`${publicUrl}/images/brand-01.png`} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={`${publicUrl}/images/brand-02.png`} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={`${publicUrl}/images/brand-03.png`} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={`${publicUrl}/images/brand-04.png`} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={`${publicUrl}/images/brand-05.png`} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={`${publicUrl}/images/brand-06.png`} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={`${publicUrl}/images/brand-07.png`} alt='brand' />
                </div>
                <div className='mx-4 w-25'>
                  <img src={`${publicUrl}/images/brand-08.png`} alt='brand' />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2' data-aos="fade-up">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <div className='col-12'>
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              navigation
              autoplay={{ delay: 3000 }}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {products.slice(0, 10).map((product) => (
                <SwiperSlide key={product.id}>
                  <Link to={`/product/${product.id}`} className="product-link">
                    <div className="product-card position-relative">
                      <div className="product-image">
                        <img
                          src={`${publicUrl}/${product.image1}`}
                          className="img-fluid"
                          alt={product.name}
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{product.brand}</h6>
                        <h5 className="product-name">{product.name}</h5>
                        <p className="price">${product.price}</p>
                      </div>
                      <div className="product-icons position-absolute">
                        <span className="icon-wishlist">
                          <img src={`${publicUrl}/images/wishlist.svg`} alt="Wishlist" />
                        </span>
                        <span className="icon-addtocart">
                          <img src={`${publicUrl}/images/addtocart.svg`} alt="Add to Cart" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>


      <Container class1='famous-wrapper py-5 home-wrapper-2'data-aos="fade-up">
        <div className='row'>
          <h3 className='section-heading'>Featured Collection</h3>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={`${publicUrl}/images/famous-01.jpg`} className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $999.00 or $41.62/mo.</p>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={`${publicUrl}/images/famous-02.jpg`} className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Macbook Pro</h5>
                <h6 className='text-dark'>600 nits of brightness.</h6>
                <p className='text-dark'>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={`${publicUrl}/images/famous-03.jpg`} className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Ipad Pro</h5>
                <h6 className='text-dark'>Ipad Pro 2024</h6>
                <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={`${publicUrl}/images/famous-04.jpg`} className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Home Speaker</h5>
                <h6 className='text-dark'>Room-filling Sound.</h6>
                <p className='text-dark'>From $999.00 or $41.62/mo.</p>
              </div>
            </div>
          </div>

        </div>
      </Container>

      <Container class1='blog-wrapper py-5 home-wrapper-2'data-aos="fade-up">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Lastest Blogs</h3>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>

    </>
  );
}

export default Home;
