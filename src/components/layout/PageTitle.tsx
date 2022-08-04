import { Helmet } from "react-helmet-async";

interface pageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: pageTitleProps) => {
  return (
    <Helmet>
      <title>{title} | Take-High</title>
    </Helmet>
  );
};
