import Content from "./Content";
import ResponsiveImage from "./ResponsiveImage";

interface SubscribeCardProps {
  setEmail: (email: string) => void;
}

const SubscribeCard = ({ setEmail }: SubscribeCardProps) => {
  return (
    <article>
      <h2 className="sr-only">Subscribe sign up form.</h2>
      <ResponsiveImage />
      <Content setEmail={setEmail} />
    </article>
  );
};

export default SubscribeCard;
