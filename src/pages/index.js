import React from "react";
import {Layout} from "src/components/organisms/layout";
import { Flex} from "@chakra-ui/react";
export default function Home() {
  return (
    <Layout>
      <Flex style={{width: 50, height: 50, display: "inline-block", border: "1px solid gray"}} backgroundColor={"brand.blue"}/>
    </Layout>
  );
}