import Heading from "./Heading";
import iconSuccess from "../assets/images/icon-success.svg";
import Button from "./Button";

interface ThankYouCardProps {
  email: string;
  setEmail: (email: string) => void;
}

const ThankYouCard = ({ email, setEmail }: ThankYouCardProps) => {
  return (
    <article className="md:max-h-[520px] md:max-w-[504px] md:rounded-[36px] md:border md:bg-neutral-100 md:shadow-2xl md:shadow-black/25">
      <h2 className="sr-only">Thank you card</h2>
      <section className="px-6 pt-36 md:p-16">
        <img src={iconSuccess} className="mb-10 h-16 w-16" alt="" aria-hidden />
        <Heading>Thank you for subscribing!</Heading>
        <p className="pb-36 pt-6 md:pb-10">
          A confirmation email has been sent to <strong>{email}.</strong> Please
          open it and click the button inside to confirm your subscription
        </p>
        <Button
          type="button"
          onClick={() => {
            setEmail("");
          }}
        >
          Dismiss message
        </Button>
      </section>
    </article>
  );
};

export default ThankYouCard;
