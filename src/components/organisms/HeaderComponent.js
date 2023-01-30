import React from 'react';
import { Col, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';

import brand_logo from '../../assets/image_book.jpeg';

const HeaderComponent = () => {
    return (
        <Header
        style={{
            backgroundColor: 'yellow',
        }}
        >
        <Row>
            <Col>
                <img
                src={brand_logo}
                alt='brand logo'
                className='brand-logo'
                />
            </Col>
            <Col>
                <div className='brand'>Book Rentall App</div>
            </Col>
            <Col>
            <div className='sign-in'>Sign-in</div>
            </Col>
        </Row>
    </Header>
    )
}

export default HeaderComponent;