import { PageTitle } from "@components/PageTitle";
import Header from "./Header";
interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="w-full h-full ">
      <PageTitle title={pageTitle} />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
