import React from "react";
import { Card } from "./Card";

const UpcomingEvents = () => {
  return (
    <div className="px-[10px]">
      <div className="flex justify-between ">
        <h1 className="font-bold text-[24px] text-dark-blue">
          Upcoming Events
        </h1>
        <button className="bg-dark-blue rounded-3xl">
          <span className="py-[8px] px-[16px] text-[white] font-thin text-[14px]">
            View All
          </span>
        </button>
      </div>
      <span className="text-slate-400 font-semibold">Today, 4 Apr</span>
      <div className="mt-[20px]">
        <Card
          title="Firts Session with Alex Stan"
          date={"9:00 AM - 9:30 AM GMT +8"}
          avatar="https://inuvdp.com/wp-content/uploads/2023/07/Download-File-Vector-Logo-MU-Manchester-United-01.jpg"
        />
      </div>
      <div className="mt-[20px]">
        <Card
          color="bg-light-blue"
          colorbg="bg-dark-orange"
          title="Webbinar: How to cope with trauma in professional life"
          date={"9:00 AM - 9:30 AM GMT +8"}
          call={false}
        />
      </div>
      <div className="mt-[20px]">
        <Card
          titlecard="text-[white]"
          color="bg-dark-orange"
          colorbg="bg-light-blue"
          title="First Session with Alex Stan"
          date={"9:00 AM - 9:30 AM GMT +8"}
          avatar="https://inuvdp.com/wp-content/uploads/2023/07/Download-File-Vector-Logo-MU-Manchester-United-01.jpg"
        />
      </div>
    </div>
  );
};

export default UpcomingEvents;
