import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CardTitle } from "./Card";

const localizer = momentLocalizer(moment);
const CalendarBig = () => {
  const events = [
    {
      start: moment("2024-06-19T10:00:00").toDate(),
      end: moment("2024-06-19T13:00:00").toDate(),
      title: "Hello",
      type: "noti",
    },
    {
      start: moment("2024-06-19T10:00:00").toDate(),
      end: moment("2024-06-19T18:00:00").toDate(),
      title: "Hello world",
      type: "active",
    },
    {
      start: moment("2024-06-20T10:00:00").toDate(),
      end: moment("2024-06-20T20:00:00").toDate(),
      title: "Hello world",
      type: "active",
    },
  ];
  const component = {
    event: (props: any) => {
      const eventType = props?.event?.type;
      switch (eventType) {
        case "noti":
          return (
            <div>
              <CardTitle title={props.title} />
            </div>
          );
        case "active":
          return (
            <div>
              <CardTitle
                color="bg-dark-orange"
                colorbg="bg-dark-blue"
                titlecard="text-white"
                title={props.title}
              />
            </div>
          );
        default:
          return null;
      }
    },
  };
  return (
    <div className="bg-[white] border drop-shadow-lg">
      <div className="h-[6vh] px-4 flex items-center justify-between mt-[10px]">
        <div className="flex items-center">
          <button className="border border-light-blue rounded-2xl py-[8px] px-[16px] text-light-blue">
            To Day
          </button>
          <div className="flex items-center text-light-blue">
            <button>
              <GrFormPrevious className="ml-[10px]" size={35} />
            </button>
            <button>
              <GrFormNext className="ml-[10px]" size={35} />
            </button>
          </div>
          <div className="ml-[10px]">
            <button>
              <span className="text-dark-blue font-bold text-[30px]">
                April 2024
              </span>
            </button>
          </div>
        </div>
        <button className="bg-light-blue rounded-2xl  text-[white] ">
          <span className="py-[8px] px-[16px] font-thin text-[14px] flex items-center">
            <span>Month</span>
            <MdKeyboardArrowDown size={25} />
          </span>
        </button>
      </div>
      <Calendar
        views={["day", "agenda", "month"]}
        selectable
        events={events}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "90vh" }}
        components={component}
        toolbar={false}
      />
    </div>
  );
};

export default CalendarBig;
