import React, { ReactNode, FC } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
export const Layout: FC<LayoutProps> = React.memo(({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
});
