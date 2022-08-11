import { PageTitle } from "@components/layout/PageTitle";
import Footer from "./Footer";
import Header from "./Header";
interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
  loading?: boolean;
}

const PageLayout = ({ pageTitle, children, loading }: LayoutProps) => {
  return (
    <div className={`relative inline-block h-full w-full`}>
      <Header />
      <PageTitle title={pageTitle} />
      {loading ? (
        children
      ) : (
        <div className="mx-5 mt-5 h-full bg-red-100">{children}</div>
      )}
      <Footer />
    </div>
  );
};

export default PageLayout;
