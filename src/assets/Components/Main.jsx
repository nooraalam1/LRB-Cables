import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
    const location = useLocation();
    const x = location.pathname.includes('login')
    const y = location.pathname.includes('registration')

    return (
        <div>
             <Navbar />
            <Outlet />
           {x || y  ||  <Footer />}
           
            
        </div>
    );
}

export default Main;