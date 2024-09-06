import Carousel from '../components/home/Carousel';
import Navbar from '../components/common/Navbar';
import Genre from '../components/home/Genre';
import Premiere from '../components/home/Premiere';
import LiveCard from '../components/LiveCard';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Genre />
      <Premiere/>
      <LiveCard/>
    </div>
  );
};
export default Home;
