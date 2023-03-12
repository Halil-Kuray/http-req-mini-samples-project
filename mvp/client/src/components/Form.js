import React, { useState } from "react";

function Form({ onSubmit }) {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name);
    setName("");
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
        <h2>Rgister Form</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Item..." value={name} onChange={handleChange} />
        <button type="submit">Add</button>
        </form>
    </div>
  );
}

export default Form;
