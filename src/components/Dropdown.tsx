import React, { FC } from "react";
import classes from "./Dropdown.module.scss";
const Dropdown: FC<any> = (props) => {
  const dropdownChanged = (e: { target: { value: any } }) => {
    props.changed(e.target.value);
  };

  return (
    <div className={classes.container}>
      <label>{props.label}</label>
      <select value={props.selectedValue} onChange={dropdownChanged}>
        <option key={0}>Select...</option>
        {props.options.map((item: any, idx: number) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
