import React from 'react';
import { Menu } from 'antd';

import {TiHome} from 'react-icons/ti'
import { ImSearch } from 'react-icons/im'
import { FaBook } from 'react-icons/fa'
import { BiCurrentLocation } from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc' 
import { MdAppRegistration } from 'react-icons/md'

const MenuComponent = (mode, items) => {
// const MenuComponent = (props: MenuComponentProps) => {
    // const { mode, items} = MenuComponentProps;
    return (
        <Menu 
            mode='inline'
            items={[
                {
                    label: 'Home',
                    key: 'home',
                    icon: <TiHome/>,
                    // onClick: () => {
                    //     navigate('/');
                    // },
                },
                {
                    label: 'Books',
                    key: 'books',
                    icon: <FaBook/>,
                    children: [
                        {
                            label: 'Registration',
                            key: 'registration',
                            icon: <MdAppRegistration/>,
                            // onClick: () => {
                            //     navigate('/registration');
                            // },
                        },
                        {
                            label: 'Search',
                            key: 'search',
                            icon: <ImSearch/>,
                        },
                        {
                            label: 'Rent',
                            key: 'rent',
                            icon: <BiCurrentLocation/>,
                        }
                    ]
                },
                {
                    label: 'About',
                    key: 'about',
                    icon: <FcAbout/>
                },
            ]}
        />
    )
}

export default MenuComponent;