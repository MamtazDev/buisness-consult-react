import Email from '../../Components/Shared/Email';
import Banner from './Banner';
import Business from './Business';
import Expert from './Expert';
import Mission from './Mission';
import Service from './Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
        <Banner/>
        <Business/>
        <Mission/>
        <Service/>
        <Expert/>
        <Testimonial/>
        <Email/>
        </>
    );
};

export default Home;