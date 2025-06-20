import React from "react";
import UserForm from "../modules/user/UserForm";
import ProductTable from "../modules/product/ProductTable";
import OrderTable from "../modules/order/OrderTable";

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
       element: <ProductTable />,
       label: 'Products',
       icon: 'UserOutlined' 
    },

    {
        path: '/orders',
        element: <OrderTable />,
        label: 'Orders',
        icon: 'ShoppingCartOutlined'
    },
]

export default routes;