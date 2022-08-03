import { PageTitle } from "@components/PageTitle";
interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const VerticalLayout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="inline-block h-full w-screen border border-red-400">
      <PageTitle title={pageTitle} />
      {children}
    </div>
  );
};

export default VerticalLayout;
