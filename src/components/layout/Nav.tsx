import LinkBtn from "@components/element/LinkBtn";

const Nav = () => {
  return (
    <nav className="flex justify-center space-x-5 rounded-xl border bg-white px-4 pb-3 pt-2 shadow-inner drop-shadow-lg backdrop-blur-sm backdrop-opacity-30">
      <LinkBtn to="/" text="Main" />
      <LinkBtn to="/about" text="About" />
      <LinkBtn to="/works" text="Works" />
      <LinkBtn to="/components" text="Comp" />
    </nav>
  );
};

export default Nav;
