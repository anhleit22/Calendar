import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { CardTitle } from "./Card";
import { useCallback, useMemo, useState } from "react";
import OptionSelect from "./OptionSelect";
type Keys = keyof typeof Views;
const localizer = momentLocalizer(moment);
const CalendarBig = () => {
  const [date, setDate] = useState<Date>(moment("2022-10-10").toDate());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.MONTH);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const dateText = useMemo(() => {
    if (view === Views.DAY) return moment(date).format("dddd, MMMM DD");
    if (view === Views.WEEK) {
      const from = moment(date)?.startOf("week");
      const to = moment(date)?.endOf("week");
      return `${from.format("MMMM DD")} to ${to.format("MMMM DD")}`;
    }
    if (view === Views.MONTH) {
      return moment(date).format("MMMM YYYY");
    }
  }, [view, date]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    switch (event.target.value) {
      case "month":
        setView("month");
        break;
      case "week":
        setView("week");
        break;
      case "day":
        setView("day");
        break;
      default:
        break;
    }
  };

  const options = [
    { value: "month", label: "Month" },
    { value: "week", label: "Week" },
    { value: "day", label: "Day" },
  ];

  const onTodayClick = useCallback(() => {
    setDate(moment().toDate());
  }, []);
  const onPrevClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).subtract(1, "d").toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).subtract(1, "w").toDate());
    } else {
      setDate(moment(date).subtract(1, "M").toDate());
    }
  }, [view, date]);

  const onNextClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).add(1, "d").toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).add(1, "w").toDate());
    } else {
      setDate(moment(date).add(1, "M").toDate());
    }
  }, [view, date]);
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
          <button
            onClick={onTodayClick}
            className="border border-light-blue rounded-2xl py-[8px] px-[16px] text-light-blue"
          >
            To Day
          </button>
          <div className="flex items-center text-light-blue">
            <button onClick={onPrevClick}>
              <GrFormPrevious className="ml-[10px]" size={35} />
            </button>
            <button onClick={onNextClick}>
              <GrFormNext className="ml-[10px]" size={35} />
            </button>
          </div>
          <div className="ml-[10px]">
            <button>
              <span className="text-dark-blue font-bold text-[30px]">
                {dateText}
              </span>
            </button>
          </div>
        </div>
        <OptionSelect
          options={options}
          onChange={handleSelectChange}
          value={selectedOption}
        />
      </div>
      <Calendar
        defaultView={Views.MONTH}
        // views={["day", "week", "month"]}
        selectable
        events={events}
        localizer={localizer}
        defaultDate={new Date()}
        date={date}
        style={{ height: "90vh" }}
        components={component}
        view={view}
        onView={setView}
        onNavigate={setDate}
        toolbar={false}
      />
    </div>
  );
};

export default CalendarBig;
