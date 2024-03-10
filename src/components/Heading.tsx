interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return <h3 className="text-[40px] font-bold leading-none">{children}</h3>;
};

export default Heading;
