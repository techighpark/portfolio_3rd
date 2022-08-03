import { PageTitle } from "@components/PageTitle";
import Footer from "./Footer";
interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const HorizontalLayout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="h-full w-full overflow-y-hidden overflow-x-scroll whitespace-nowrap">
      {children}
      <Footer />
    </div>
  );
};

export default HorizontalLayout;
