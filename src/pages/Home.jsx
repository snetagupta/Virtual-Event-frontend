import Carousel from '../components/home/Carousel';
import Navbar from '../components/common/Navbar';
import Genre from '../components/home/Genre';
import Premiere from '../components/home/Premiere';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Genre />
      <Premiere/>
    </div>
  );
};
export default Home;
