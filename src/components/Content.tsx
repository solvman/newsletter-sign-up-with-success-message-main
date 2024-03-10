import Form from "./Form";
import ItemList from "./ItemList";

const Content = () => {
  const listItems = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <section>
      <h2>Stay updated!</h2>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ItemList items={listItems} />
      <Form />
    </section>
  );
};

export default Content;
