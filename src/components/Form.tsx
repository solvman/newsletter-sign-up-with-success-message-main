const Form = () => {
  return (
    <form className="flex flex-col">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="email@example.com"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Form;
