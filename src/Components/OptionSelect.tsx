import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const OptionSelect = ({
  options,
  onChange,
  value,
}: {
  options: any[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-light-blue rounded-2xl  text-[white] w-[12vh] py-[8px] px-[16px] font-thin text-[14px] flex items-center"
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
      <MdKeyboardArrowDown size={25} />
    </select>
  );
};

export default OptionSelect;
