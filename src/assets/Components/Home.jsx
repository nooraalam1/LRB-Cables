import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import FromOurMenu from './FromOurMenu';
import Hero from './Hero';
import Swiperr from './Swiperr';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
    <Helmet>
        <title>Noor | Home</title>
      </Helmet>
            <Banner></Banner>
            <Swiperr></Swiperr>
            <FromOurMenu></FromOurMenu>
            <Hero></Hero>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;