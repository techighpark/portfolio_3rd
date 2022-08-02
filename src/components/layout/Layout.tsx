import { PageTitle } from "@components/PageTitle";
import Footer from "./Footer";
import Header from "./Header";
interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="relative h-full w-full">
      <PageTitle title={pageTitle} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
