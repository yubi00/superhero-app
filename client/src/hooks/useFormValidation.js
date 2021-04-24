import { useState } from "react";

const useFormValidation = (initialVal) => {
  const [values, setInput] = useState(initialVal);
  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    setError("");

    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0 || value > 100)
      return setError(`* Invalid ${e.target.name} field`);

    setInput((old) => ({
      ...old,
      [e.target.name]: e.target.value
    }));
  };
  return {
    values,
    onChangeHandler,
    error
  };
};

export default useFormValidation;
