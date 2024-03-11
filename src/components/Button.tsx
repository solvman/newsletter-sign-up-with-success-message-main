interface ButtonProps {
  type: "submit" | "button";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-lg bg-neutral-800 py-4 text-neutral-100 transition duration-200 ease-in-out hover:bg-gradient-to-b hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-xl hover:shadow-[#ff6155]/50 focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
