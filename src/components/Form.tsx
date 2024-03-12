/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface FormProps {
  setEmail: (email: string) => void;
}

const Form = ({ setEmail }: FormProps) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setIsValidEmail(EMAIL_REGEX.test(inputValue));
  }, [inputValue]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value.trim();

    if (isValidEmail) {
      setEmail(email);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col">
      <div className="flex justify-between">
        <label className="text-xs font-bold" htmlFor="email">
          Email address
        </label>
        {!isValidEmail && (
          <small className="text-xs font-bold text-primary-300">
            Valid email required
          </small>
        )}
      </div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="email"
        id="email"
        name="email"
        placeholder="email@company.com"
        autoComplete="off"
        className={twMerge(
          "mb-6 mt-2 cursor-pointer rounded-lg border border-neutral-300 px-6 py-4 placeholder-neutral-800 placeholder-opacity-50 transition duration-200 ease-in-out focus:border-neutral-800 focus:outline-none",
          !isValidEmail &&
            "border-primary-300 bg-primary-300/25 text-primary-300 placeholder-primary-300 focus:border-primary-300 focus:ring-primary-300",
        )}
      />
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
};

export default Form;
