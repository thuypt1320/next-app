import React, {useState} from 'react';
import {
  NavbarBody,
  NavbarContainer,
  NavbarFooter,
  NavbarHeader, NavbarItem,
  NavbarList
} from "components/organisms/navbar/navbar.style";
import PropTypes from "prop-types";

NavBar.propTypes = {
  header: PropTypes.string,
  bodyList: PropTypes.array,
  footerList: PropTypes.array
};


function NavBar(props) {
  const {header, bodyList, footerList} = props;
  const [open, setOpen] = useState(true);
  return (
    <NavbarContainer style={{display: open?undefined:"none"}}>
      <NavbarHeader onChange={() => setOpen(!open)}>{header}</NavbarHeader>
      <NavbarBody>
        <NavbarList>
          {bodyList.map((item, index) => <NavbarItem key={index}>{item}</NavbarItem>)}
        </NavbarList>
      </NavbarBody>
      <NavbarFooter>
        <NavbarList>
          {footerList.map((item, index) => <NavbarItem key={index}>{item}</NavbarItem>)}
        </NavbarList>
      </NavbarFooter>
    </NavbarContainer>
  );
}

export default NavBar;