interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="rounded-lg bg-primary px-6 py-3">
      <span className="text-white text-xl uppercase">{title}</span>
    </button>
  );
};

export default Button;
