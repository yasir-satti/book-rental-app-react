import React from 'react';
import { Col, Image, Row, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';

const brandLogo: string = '../../assets/image_book.jpeg';

const HeaderBar = () => {
	const { Text } = Typography;
	return (
		<Header className="header">
			<Row justify="space-between">
				<Col>
					<Row>
						<Col>
							<Image width={50} src={brandLogo} className="brand-logo" />
						</Col>
						<Col className="header">
							<Text className="brand-title">Book Rentall App</Text>
						</Col>
					</Row>
				</Col>
			</Row>
		</Header>
	);
};

export default HeaderBar;
