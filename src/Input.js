/* eslint-disable react/no-typos */
import React, { useState } from "react";
import PropTypes from "prop-types";

function Input({ addPosts }) {
  const [input, setInput] = useState("");
  function onChange(event) {
    setInput(event.target.value);
  }
  function onKeyDown(event) {
    const title = event.target.value;
    if (event.onKeyDown === "Enter" && title) {
      addPosts(title);
      setInput("");
    }
  }
  return (
    <div className="Input">
      <div className="Input_header">Create Post</div>
      <input
        className="Input_field"
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

Input.PropTypes = {
  addPosts: PropTypes.func.isRequired,
};
export default Input;
