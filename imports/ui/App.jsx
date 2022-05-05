import React, { useState } from "react";
import NumberForm from "./Components/NumberForm";

export const App = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <NumberForm value={value} setValue={setValue} />
    </div>
  );
};
