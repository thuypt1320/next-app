import styled from "@emotion/styled";
import {Box} from "@chakra-ui/react";

const TabContainer = styled(Box)`
  & {
    height: 50px;
    width: 100px;
    padding: 10px;
    margin: 10px;
    text-transform: capitalize;
    text-align: center;
  }
  &:hover {
    color: blue;
    border-bottom: 3px solid blue;
    cursor: pointer;
  }
  `;

const TabLink = styled.a`
`;

export {TabContainer, TabLink};