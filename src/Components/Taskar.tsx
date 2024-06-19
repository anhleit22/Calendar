import UpcomingEvents from "./UpcomingEvents";
import Calendar from "react-calendar";

const Taskar = () => {
  return (
    <div className="h-[100vh] bg-[white] border drop-shadow-lg">
      <div className="flex justify-center mb-[35px] border-b-2">
        <Calendar prev2Label={false} next2Label={false} />
      </div>
      <UpcomingEvents />
    </div>
  );
};

export default Taskar;
