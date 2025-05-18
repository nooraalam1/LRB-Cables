import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Main = () => {


    return (
        <div>
            <ScrollToTop></ScrollToTop>
             <Navbar />
            <Outlet />
            <Footer></Footer>
           
            
        </div>
    );
}

export default Main;