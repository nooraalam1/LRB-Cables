import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Main = () => {


    return (
        <div>
             <Navbar />
            <Outlet />
            <Footer></Footer>
           
            
        </div>
    );
}

export default Main;