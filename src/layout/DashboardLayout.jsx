import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex gap-10">

            <div>
                <ul>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/editProfile'>Profile</Link>
                    </li>
                </ul>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;