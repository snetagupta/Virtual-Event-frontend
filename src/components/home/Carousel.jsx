import { Carousel } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CarouselComponent = () => {
  const navigate = useNavigate();
  const [promotions, setPromotions] = useState([]);

  const getPromotions = async()=>{
    try {
      const {data} = await axios.get(`${BACKEND_URL}/api/promotions`);
      setPromotions(data.response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPromotions();
    console.log(promotions)
  }, []);

  return (
    <div className='flex p-3 md:p-5 gap-5 h-[50vh]'>
    <Carousel
      className='rounded-xl'
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className='absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2'>
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {
        promotions?.map((promotion, index) => (
          <img
            key={index}
            src={promotion.image}
            alt={promotion.title}
            className='h-full w-full object-cover cursor-pointer'
            onClick={()=>navigate(`event-details/${promotion._id}`)}
          />
        ))
      }
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
