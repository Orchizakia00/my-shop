import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const MainLayout = () => {

    const navigation = useNavigation();
    console.log(navigation.state === 'loading');

    return (
        <div>
            <section className='flex justify-between px-10 shadow-md py-4 mt-4'>
                <div>
                    <p className='text-3xl font-bold'>AmaJone</p>
                </div>
                <nav>
                    <ul className='flex gap-10'>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400 p-2 rounded-xl" : ""
                            }
                        >
                            Home
                        </NavLink>
                        
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400 p-2 rounded-xl" : ""
                            }
                        >
                            Products
                        </NavLink>
                        
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-blue-400 p-2 rounded-xl" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
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