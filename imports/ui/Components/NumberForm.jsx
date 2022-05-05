import React, { useState } from "react";
import "./NumberForm.scss";

const NumberForm = ({ value, setValue }) => {
  const [printValue, setPrintValue] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setPrintValue(!printValue);
  }

  function handleChange(e) {
    setPrintValue(false);
    setValue(e.target.value);
  }

  function range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((_, i) => start + i);
  }
  const numbersArr = range(1, 100);

  return (
    <section className="container">
      <form className="form">
        <label className="form__label">Insert A Number Between 1 and 100</label>
        <input
          type="number"
          name="number"
          onChange={handleChange}
          className="form__input"
        />
        <button className="form__button" onClick={handleClick}>
          Submit
        </button>
      </form>

      {printValue &&
        numbersArr.reduce(() => {
          if (value % 3 === 0 && value % 5 === 0) {
            return <h1>{value}. RobotICT</h1>;
          } else if (value % 5 === 0) {
            return <h1>{value}. ICT</h1>;
          } else if (value % 3 === 0) {
            return <h1>{value}. Robot</h1>;
          } else {
            return <h1>{value}</h1>;
          }
        })}
    </section>
  );
};

export default NumberForm;
