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
      <button
        type="submit"
        className="rounded-lg bg-neutral-800 py-4 text-neutral-100 transition duration-200 ease-in-out hover:bg-gradient-to-b hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-xl hover:shadow-[#ff6155]/50 focus:outline-none"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
