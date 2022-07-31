interface buttonProps {
  text: string;
}

const Button = ({ text }: buttonProps) => {
  return (
    <button
      className="bg-white w-14 aspect-video rounded-lg drop-shadow-lg flex justify-center items-center 
    hover:cursor-pointer hover:drop-shadow-md"
    >
      <span className="text-basic-dark-light font-semibold text-sm">
        {text}
      </span>
    </button>
  );
};

export default Button;
