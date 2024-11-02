import React from "react";

function Form({ text, setText, onSubmit }) {
  const handleChange = (e) => setText(e.target.value);

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type a sentence to check grammar..."
      />
      <button onClick={onSubmit}>Check Grammar</button>
    </div>
  );
}

export default Form;