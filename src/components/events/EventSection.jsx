import Eventcard from "./EventCard";

const EventSection = () => {

      const data = [1,2,3,4,5,6,7,8,9,10] 
      return(
      <div className="flex flex-wrap gap-5 p-5 ">
        {data.map(() => (
          <Eventcard />
        ))}
      </div>
      )
    
};
export default EventSection;
