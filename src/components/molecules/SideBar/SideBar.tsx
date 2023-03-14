import React from 'react';
import Sider from 'antd/es/layout/Sider';
import '../../app/App.css';
import MenuComponent from './MenuComponent';

const SideBar = () => {
	return (
		<Sider collapsedWidth={0}>
			<MenuComponent />
		</Sider>
	);
};

export default SideBar;
