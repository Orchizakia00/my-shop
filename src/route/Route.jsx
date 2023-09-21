import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home';
import Products from '../components/products/Products';
import MainLayout from '../layout/MainLayout';
import Product from '../components/product/Product';
import DashboardLayout from '../layout/DashboardLayout';
import Dashboard from '../components/dashboard/Dashboard';
import Profile from '../components/profile/Profile';
import EditProfile from '../components/editprofile/EditProfile';


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/products/:id',
                element: <Product></Product>,
                loader: (object) =>
                    fetch(`https://dummyjson.com/products/${object.params.id}`)
            },

            {
                path: '/dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    },
                ]
            },
        ]

    }
])

export default myCreatedRoute;