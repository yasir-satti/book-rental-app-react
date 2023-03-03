import React from 'react';
import { Col, Image, Layout, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';

const brandLogo: string = '../../../assets/book_rental_image_00.png';

const HeaderBar = () => {
	return (
		<Header>
			<Layout className="header">
				<Row>
					<Col>
						<Row>
							<Col>
								<Image
									width={50}
									src={brandLogo}
									// className="brand-logo"
								></Image>
							</Col>
							<Col>
								<Title className="brand-title">Book Rentall App</Title>
							</Col>
						</Row>
					</Col>
				</Row>
			</Layout>
		</Header>
	);
};

export default HeaderBar;
