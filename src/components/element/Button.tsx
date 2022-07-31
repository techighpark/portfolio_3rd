interface buttonProps {
  text: string;
}

const Button = ({ text }: buttonProps) => {
  return <div className="bg-primary-default">{text}</div>;
};

export default Button;
