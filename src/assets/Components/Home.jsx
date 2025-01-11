import Banner from './Banner';
import FromOurMenu from './FromOurMenu';
import Hero from './Hero';
import Swiperr from './Swiperr';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Swiperr></Swiperr>
            <FromOurMenu></FromOurMenu>
            <Testimonials></Testimonials>
            <Hero></Hero>
        </div>
    );
};

export default Home;