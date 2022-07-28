import styled from "@emotion/styled";
import {Box} from "@chakra-ui/react";

const NavbarContainer = styled(Box)`
    & {
      background-color: #eeeeee;
      border-right: 1px solid #cecaca;
      padding: 10px;
      width: 300px;
      height: 100%;
    }
    
  `;

const NavbarHeader = styled(Box)`
    & {
      padding: 0 10px;
    }
  `;

const NavbarBody = styled(Box)`
  padding: 10px 0;
  `;

const NavbarList = styled(Box)`
  
  `;

const NavbarItem =  styled(Box)`
  & {
      padding: 10px 0;
      text-transform: capitalize;
  }
  
  &:active, &:hover {
    background-color: lightblue;
    border-radius: 4px;
    color: blue;
    cursor: pointer;
  }
  
  &:hover:before {
    content: "";
    border-left: 3px solid blue;
    margin-right: 10px;
    height: 5px;
  }
  `;

const NavbarFooter = styled(Box)`
      & {
        min-height: 100px;
      }
      &:before {
        content: "";
        border-top: 1px solid #c1bcbc;
        padding-bottom: 10px;
        margin: 0 10px;
      }
  `;

export {NavbarContainer, NavbarHeader, NavbarBody, NavbarList, NavbarItem,NavbarFooter};