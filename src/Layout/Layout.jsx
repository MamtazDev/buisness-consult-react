import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    );
};

export default Layout;