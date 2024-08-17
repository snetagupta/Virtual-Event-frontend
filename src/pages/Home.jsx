import Carousel from '../components/home/Carousel';
import Navbar from '../components/common/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='flex p-5 gap-5 h-[50vh]'>
          <Carousel />
      </div>
    </div>
  );
};
export default Home;
