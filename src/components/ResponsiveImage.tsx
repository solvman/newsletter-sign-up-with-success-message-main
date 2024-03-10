import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";

const ResponsiveImage = () => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopImage} />
      <img className="w-full" src={mobileImage} alt="Sign up" />
    </picture>
  );
};

export default ResponsiveImage;
