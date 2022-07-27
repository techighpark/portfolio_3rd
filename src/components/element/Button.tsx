interface buttonProps {
  text: string;
}

const Button = ({ text }: buttonProps) => {
  return <div className="bg-red-500">{text}</div>;
};

export default Button;
