import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number = 750) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};
export default useDebounce;
