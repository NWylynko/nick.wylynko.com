import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import "../index.css";
import { Background } from "../components/Background/index";

interface Props {}

const Index = (props: Props) => {
  return (
    <>
      <Background />
      {/* <TextBody>
        <Title>Hello World</Title>
        <Link to="/second">to second page</Link>
      </TextBody> */}
    </>
  );
};

const Title = styled.h1`
  color: white;
`;

const TextBody = styled.div`
  height: 200vh;
  width: 100%;
  position: absolute;
`;

export default Index;
