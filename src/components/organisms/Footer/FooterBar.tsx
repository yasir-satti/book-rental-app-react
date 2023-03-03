import React from 'react';
import { Row, Typography } from 'antd';
import { Footer } from 'antd/es/layout/layout';

const FooterBar = () => {
	const { Text } = Typography;
	return (
		<Footer>
			<Row justify="space-between" className="footer">
				<Typography.Link>Privacy Policy</Typography.Link>
				<Text className="brand-title">All rights reserved 2023</Text>
			</Row>
		</Footer>
	);
};

export default FooterBar;
