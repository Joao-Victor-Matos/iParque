interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="rounded-xl bg-primary px-4 py-2 hover:bg-secondary hover:px-5 transition-all">
      <span className="text-white text-xl uppercase">{title}</span>
    </button>
  );
};

export default Button;
