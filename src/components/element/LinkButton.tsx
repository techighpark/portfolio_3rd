interface linkTextProps {
  text: string;
}

const LinkButton = ({ text }: linkTextProps) => {
  return (
    <div className="hover:cursor-pointer hover:shadow-inner rounded-xl w-16 aspect-video">
      {text}
    </div>
  );
};

export default LinkButton;
