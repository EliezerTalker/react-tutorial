import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";


// React.forwardRef return a react component. and it alows us to use ref on our custom component
// the useImperativeHandle hook defines as in the secound argument what this ref will expose
// here we expose the activate function but we can also expose values


const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { focus: activate };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
