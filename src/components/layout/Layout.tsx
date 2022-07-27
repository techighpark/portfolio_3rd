import { PageTitle } from "@components/PageTitle";
import Header from "./Header";
interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      <PageTitle title={pageTitle} />
      <Header />
      {children}
    </div>
  );
};

export default Layout;