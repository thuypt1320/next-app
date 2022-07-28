import React from 'react';
import TabList from "components/molecules/tablist";
import {HeaderContainer} from "components/organisms/header/header.style";

const Header = () => {
  return (
    <HeaderContainer>
      <TabList lists={["home", "tab 1"]}/>
    </HeaderContainer>
  );
};

export default Header;