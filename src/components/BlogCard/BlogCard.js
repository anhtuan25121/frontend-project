import React from 'react';
import { Card, Button } from 'antd';
import './blogcard.css';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default function BlogCard() {
  const publicUrl = process.env.PUBLIC_URL;
  return (
    <div >
      <Card
        hoverable
        className='blog-card'
        style={{ width: '100%' }}
        cover={
          <img
            alt='blog'
            src={`${publicUrl}/images/blog-1.jpg`}
            className='img-fluid w-100'
          />
        }
      >
        <Meta
          title="A beautiful sunday morning renaissance"
          description={
            <div className='blog-content'>
              <p className='date'>
                1 Dec, 2022
              </p>
              <p className='desc'>
                bạn cần điều chỉnh cách sắp xếp các phần tử và đảm bảo rằng chúng có cùng chiều rộng.
              </p>
              <Link to='/blog/:id' className='custom-button'>Read More</Link>

            </div>
          }
        />
      </Card>

    </div>
  );
}
