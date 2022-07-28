import styled from "@emotion/styled";
import {Box} from "@chakra-ui/react";

const LayoutContainer = styled(Box)`
    & {
      flex: 1;
      height: 100vh;
    }
  `;
const LayoutMain = styled(Box)`
    & {
      display: flex;
      height: 100%;
    }
  `;
const LayoutContent = styled(Box)`
    & {
      width:100%;
      text-align: center;
      padding: 20px;
    }
  `;

export {LayoutContainer, LayoutMain, LayoutContent};