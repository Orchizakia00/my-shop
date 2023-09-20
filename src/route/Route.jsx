import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home';
import Products from '../components/products/Products';
import MainLayout from '../layout/MainLayout';


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
                path: '/dashboard',
                element: <div>dashboard</div>
            },
        ]

    }
])

export default myCreatedRoute;