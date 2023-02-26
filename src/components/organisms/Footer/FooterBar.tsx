import React from 'react';
import { Row, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';

const FooterBar = () => {
	const { Text } = Typography;
	return (
		<Header>
			<Row justify="space-between" className="footer">
				<Text className="brand-title">All rights reserved 2023</Text>
			</Row>
		</Header>
	);
};

export default FooterBar;
