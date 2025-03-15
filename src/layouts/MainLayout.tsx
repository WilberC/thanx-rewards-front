import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";
import {RewardsProvider} from "../context/RewardsContext";

const MainLayout = () => {
    return (
        <RewardsProvider>
            <Navbar/>
            <main className="p-4">
                <Outlet/>
            </main>
        </RewardsProvider>
    );
};

export default MainLayout;