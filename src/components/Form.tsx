/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface FormProps {
  setEmail: (email: string) => void;
}

const Form = ({ setEmail }: FormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const debouncedInputValue = useDebounce(inputValue);

  useEffect(() => {
    if (debouncedInputValue !== "") {
      if (EMAIL_REGEX.test(debouncedInputValue)) {
        setIsError(false);
      } else {
        setIsError(true);
      }
    }
  }, [debouncedInputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (EMAIL_REGEX.test(inputValue)) {
      setEmail(inputValue);
    } else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col">
      <div className="flex justify-between">
        <label className="text-xs font-bold" htmlFor="email">
          Email address
        </label>
        {isError && (
          <small className="text-xs font-bold text-primary-300">
            Valid email required
          </small>
        )}
      </div>
      <input
        value={inputValue}
        onChange={handleChange}
        type="email"
        id="email"
        name="email"
        placeholder="email@company.com"
        autoComplete="off"
        aria-invalid={isError}
        className={twMerge(
          "mb-6 mt-2 cursor-pointer rounded-lg border border-neutral-300 px-6 py-4 placeholder-neutral-800 placeholder-opacity-50 transition duration-200 ease-in-out focus:border-neutral-800 focus:outline-none",
          isError &&
            "border-primary-300 bg-primary-300/25 text-primary-300 placeholder-primary-300 focus:border-primary-300 focus:ring-primary-300",
        )}
      />
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
};

export default Form;
