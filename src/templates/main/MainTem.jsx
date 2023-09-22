import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../shared-components/header/Header";
import Footer from "../../shared-components/footer/Footer";


const MainTem = () => {
   
    return (
        <>
            <Header/>
            <hr className="my-14"/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainTem;