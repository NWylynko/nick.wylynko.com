import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Circle } from '../components/shapes/Circle';
import { Rectangle } from "../components/shapes/Rectangle";
import { Triangle } from "../components/shapes/Triangle";

interface Props {}

const Index = (props: Props) => {
  return (
    <div>
      <Title>Hello World</Title>
      <Link to="/second">to second page</Link>
      <Circle colour="lightblue" radius={50} />
      <Rectangle colour="red" height={100} width={50} radius={10} />
      <Triangle colour="lightgreen" size={100} />
    </div>
  );
};

const Title = styled.h1`
  color: red;
`;

export default Index;
