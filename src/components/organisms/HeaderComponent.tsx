import React from 'react';
import { Col, Image, Row, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';

import brand_logo from '../../assets/image_book.jpeg';

const HeaderComponent = () => {

    const { Text } =Typography;
    return (
        <Header>
            <Row justify='space-between' className='header'>
                <Col>
                    <Row>
                        <Col>
                            <Image
                            width={50}
                            src={brand_logo}
                            className='brand-logo'
                            />
                        </Col>
                        <Col>
                            <Text className='brand-title'>
                                Book Rentall App
                            </Text>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Text className='sign-in-text'>
                        Sign-in
                    </Text>
                </Col>
            </Row>
        </Header>
    )
}

export default HeaderComponent;