import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <section className='flex justify-between px-10 shadow-md py-4'>
                <div>
                    <p className='text-3xl font-bold'>AmaJone</p>
                </div>
                <nav>
                    <ul className='flex gap-10'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    </ul>
                </nav>
            </section>

            <div className='min-h-full'>
                <Outlet></Outlet>
            </div>


            <Footer></Footer>


        </div>
    );
};

export default MainLayout;