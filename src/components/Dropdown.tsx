import React, { FC } from "react";
import classes from "./Dropdown.module.scss";

interface IdropDown {
  label: string;
  selectedValue: string;
  changed: (value: string) => void;
  options: any[];
}

const Dropdown: FC<IdropDown> = ({
  changed,
  label,
  selectedValue,
  options,
}) => {
  const dropdownChanged = (e: { target: { value: any } }) => {
    changed(e.target.value);
  };

  return (
    <div className={classes.container}>
      <label>{label}</label>
      <select value={selectedValue} onChange={dropdownChanged}>
        <option key={0}>Select...</option>
        {options.map((item: any, idx: number) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
