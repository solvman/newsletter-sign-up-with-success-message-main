import icon from "../assets/images/icon-list.svg";

interface ItemListProps {
  items: string[];
}

const ItemList = ({ items }: ItemListProps) => {
  return (
    <ul className="flex flex-col gap-[10px]">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-4">
          <img src={icon} alt="" aria-hidden className="w-21 h-21" />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
