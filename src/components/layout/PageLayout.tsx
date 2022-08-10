import { PageTitle } from "@components/layout/PageTitle";
interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
  loading?: boolean;
}

const PageLayout = ({ pageTitle, children, loading }: LayoutProps) => {
  return (
    <div className={`relative inline-block h-full w-full`}>
      <PageTitle title={pageTitle} />
      {loading ? children : <div className="h-full">{children}</div>}
    </div>
  );
};

export default PageLayout;
