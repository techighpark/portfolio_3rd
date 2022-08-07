interface LayoutProps {
  children: React.ReactNode;
}

const HorizontalLayout = ({ children }: LayoutProps) => {
  return (
    <div className="relative h-full w-full overflow-x-hidden overflow-y-hidden whitespace-nowrap">
      {children}
    </div>
  );
};

export default HorizontalLayout;
