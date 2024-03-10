import Button from "./Button";

const Form = () => {
  return (
    <form className="mt-10 flex flex-col">
      <label className="text-xs font-bold" htmlFor="email">
        Email address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="email@company.com"
        autoComplete="off"
        className="mb-6 mt-2 cursor-pointer rounded-lg border px-6 py-4 placeholder-neutral-800 placeholder-opacity-50 transition duration-200 ease-in-out focus:border-neutral-800 focus:outline-none"
      />
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
};

export default Form;
