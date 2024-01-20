import React from "react";

function Input(props) {
  const [inputText, setInputText] = React.useState("");

  function handleOnChange(event) {
    setInputText(event.target.value);
  }

  function handleOnEnter(event) {
    if (event.key === "Enter") {
      props.typed(inputText);
      setInputText("");
    }
  }

  return (
    <div className='form'>
      <input
        onChange={handleOnChange}
        onKeyPress={handleOnEnter}
        type='text'
        value={inputText}
      />
      <button
        onClick={() => {
          props.typed(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
