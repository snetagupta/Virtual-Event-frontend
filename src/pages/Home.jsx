import Carousel from '../components/home/Carousel';
import Navbar from '../components/common/Navbar';
import Genre from '../components/home/Genre';
import LiveCard from '../components/LiveCard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Genre />
      <LiveCard/>
    </div>
  );
};
export default Home;
