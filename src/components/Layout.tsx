import { ReactNode, FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};
