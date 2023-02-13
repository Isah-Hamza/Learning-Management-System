import React from "react";
import { BiCaretDown } from "react-icons/bi";

const CustomSelect = ({ options }) => {
  return (
    <div className="relative">
      <select className="appearance-none px-2 py-1 rounded border outline-none text-sm">
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <BiCaretDown className="absolute top-1/2 -translate-y-1/2 right-3" />
    </div>
  );
};

export default CustomSelect;
