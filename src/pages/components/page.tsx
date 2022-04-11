import React from "react";
import { Header, Footer } from "../../components";

const Page: React.FC<React.PropsWithChildren<any>> = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
        <React.Fragment>
          {children}
        </React.Fragment>
      <Footer />
    </React.Fragment>
  )
}
export default Page;
