import Content from "./Content";
import ResponsiveImage from "./ResponsiveImage";

interface SubscribeCardProps {
  setEmail: (email: string) => void;
}

const SubscribeCard = ({ setEmail }: SubscribeCardProps) => {
  return (
    <article className="md:mx-6 md:flex md:flex-row-reverse md:rounded-[36px] md:border md:bg-neutral-100 md:shadow-2xl md:shadow-black/25">
      <h2 className="sr-only">Subscribe sign up form.</h2>
      <ResponsiveImage />
      <Content setEmail={setEmail} />
    </article>
  );
};

export default SubscribeCard;
