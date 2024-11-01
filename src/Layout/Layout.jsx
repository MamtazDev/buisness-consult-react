import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from 'react-router-dom'
import ScrollToTop from "../Components/Shared/ScrollToTop";

const Layout = () => {
    return (
      <>
      <ScrollToTop/>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    );
};

export default Layout;