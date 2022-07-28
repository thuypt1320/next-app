import React from "react";
import Header from "components/organisms/header";
import NavBar from "components/organisms/navbar";
import PropTypes from "prop-types";
import {LayoutContainer, LayoutMain, LayoutContent} from "components/organisms/layout/layout.style";

Layout.propTypes = {
  children: PropTypes.element
};

export function Layout ({children}) {
  return(
    <LayoutContainer>
      <Header/>
      <LayoutMain>
        <NavBar header={"header"} bodyList={["item 1", "item 2"]} footerList={["setting"]}/>
        <LayoutContent>{children}</LayoutContent>
      </LayoutMain>
    </LayoutContainer>
  );
}