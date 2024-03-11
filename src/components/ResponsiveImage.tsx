import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";

const ResponsiveImage = () => {
  return (
    <picture className="max-w-[400px] md:m-6 md:w-1/2">
      <source media="(min-width: 768px)" srcSet={desktopImage} />
      <img
        className="w-full md:h-full md:rounded-2xl md:object-cover"
        src={mobileImage}
        alt=""
        aria-hidden
      />
    </picture>
  );
};

export default ResponsiveImage;
