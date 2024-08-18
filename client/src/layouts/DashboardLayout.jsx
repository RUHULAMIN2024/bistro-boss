import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            
            <Sidebar></Sidebar>
            <div className="flex-1 p-5 md:ml-64">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;