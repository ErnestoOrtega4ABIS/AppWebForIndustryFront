import React from "react";
import UserForm from "../modules/user/UserForm";

export interface AppRoute {
    path: string;
    element: React.ReactElement;
    label?: string;
    icon?: string;
    //routeIds?: string[];
    //hidden?: boolean;
}

const routes: AppRoute[] = [
    {
        path: '/',
        element: <UserForm />,
        label: 'Home',
        icon: 'HomeOutlined'
    },

    {
        path: '/users',
        element: <UserForm />,
        label: 'Users',
        icon: 'UserOutlined'
    },

    {
       path: '/products',
       element: <UserForm />,
       label: 'Products',
       icon: 'UserOutlined' 
    },

    {
        path: '/orders',
        element: <UserForm />,
        label: 'Orders',
        icon: 'ShoppingCartOutlined'
    },
]

export default routes;