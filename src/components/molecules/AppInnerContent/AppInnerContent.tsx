import React from 'react';
import { Outlet } from 'react-router-dom';

const AppInnerContent = () => {
	return (
		<div>
			App Inner Content
			<Outlet />
		</div>
	);
};

export default AppInnerContent;
