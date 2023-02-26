import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { FcAbout } from 'react-icons/fc';
import {
	MdAppRegistration,
	MdAssignmentReturn,
	MdBook,
	MdHome,
	MdLibraryBooks,
	MdLogin,
	MdLogout,
} from 'react-icons/md';

const MenuComponent = () => {
	// const MenuComponent = (props: MenuComponentProps) => {
	// const { mode, items} = MenuComponentProps;
	const navigate = useNavigate();
	return (
		<Menu
			mode="inline"
			items={[
				{
					label: 'Home',
					key: 'home',
					icon: <MdHome />,
					onClick: () => {
						navigate('/');
					},
				},
				{
					label: 'About',
					key: 'about',
					icon: <FcAbout />,
					onClick: () => {
						navigate('/about');
					},
				},
				{
					label: 'Sign Up',
					key: 'signup',
					icon: <MdAppRegistration />,
					onClick: () => {
						navigate('/signup');
					},
				},
				{
					label: 'Sign In',
					key: 'signin',
					icon: <MdLogin />,
					onClick: () => {
						navigate('/signin');
					},
				},
				{
					label: 'Books',
					key: 'books',
					icon: <MdLibraryBooks />,
					onClick: () => {
						navigate('/books');
					},
				},
				{
					label: 'Rental',
					key: 'rental',
					icon: <MdBook />,
					onClick: () => {
						navigate('/rentals');
					},
				},
				{
					label: 'Returns',
					key: 'returns',
					icon: <MdAssignmentReturn />,
					onClick: () => {
						navigate('/returns');
					},
				},
				{
					label: 'Logout',
					key: 'logout',
					icon: <MdLogout />,
					danger: true,
					onClick: () => {
						navigate('/logout');
					},
				},
			]}
		/>
	);
};

export default MenuComponent;
