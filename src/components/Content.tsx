import Form from "./Form";
import Heading from "./Heading";
import ItemList from "./ItemList";

const Content = () => {
  const listItems = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <section className="px-6 py-10">
      <Heading>Stay updated!</Heading>
      <p className="py-6">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ItemList items={listItems} />
      <Form />
    </section>
  );
};

export default Content;
