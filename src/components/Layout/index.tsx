import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function Layout(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-2xl m-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
