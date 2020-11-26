import React from "react";
import styled from "styled-components";
import { Circle } from "./shapes/Circle";
import { Rectangle } from "./shapes/Rectangle";
import { Triangle } from "./shapes/Triangle";
import colours from './colours'

export function Background() {
  return (
    <Container>
      <Circle colour={colours.blue} radius={200} x={750} y={-200} />
      <Triangle colour={colours.yellowOrange} size={250} x={-20} y={100} />
      <Rectangle colour={colours.cyanBlue} height={350} width={300} radius={10} x={650} y={100} />
      <Rectangle colour={colours.blue} height={250} width={350} radius={10} x={1300} y={300} />
      <Triangle colour={colours.peaGreen} size={125} x={1500} y={200} />
    </Container>
  );
}

const Container = styled.svg`
  height: 200vh;
  width: 100%;
  background-color: #111111;
  position: absolute;
`;