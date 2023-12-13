import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar";
import Footer from "../Component/Footer";

const MainRouter = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>    
            <Footer></Footer>       
        </div>
    );
};

export default MainRouter;