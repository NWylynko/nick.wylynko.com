import React from "react";
import styled from "styled-components";
import { Circle } from "./shapes/Circle";
import { Rectangle } from "./shapes/Rectangle";
import { Triangle } from "./shapes/Triangle";
import colours from './colours'
import { useWindowSize } from '../../hooks/useWindowSize';

export function Background() {

  const { width } = useWindowSize();

  if (!width) {
    return null
  }

  return (
    <Container>
      <Triangle colour={colours.yellowOrange} size={250} x={width * 0.2 - 400} y={100} />

      <Circle colour={colours.blue} radius={200} x={width * 0.1 + 500} y={-200} />
      <Rectangle colour={colours.cyanBlue} height={350} width={300} radius={10} x={width * 1.2 - 1400} y={100} />

      <Rectangle colour={colours.blue} height={250} width={350} radius={10} x={width * 1.02 - 500} y={300} />
      <Triangle colour={colours.peaGreen} size={125} x={width * 1.4 - 1000} y={200} />

      <Circle colour={colours.cyanBlue} radius={150} x={-80} y={700} />
      <Triangle colour={colours.yellow} size={250} x={-150} y={850} />
      <Rectangle colour={colours.magentaRed} height={400} width={450} radius={10} x={150} y={850} />
      <Triangle colour={colours.green} size={100} x={450} y={800} />

      <Rectangle colour={colours.red} height={300} width={250} radius={10} x={1100} y={1000} />
      <Circle colour={colours.cyan} radius={125} x={1300} y={925} />
      <Triangle colour={colours.yellowGreen} size={125} x={1500} y={875} />

      <Triangle colour={colours.greenCyan} size={250} x={550} y={1500} />
      <Circle colour={colours.blueViolet} radius={75} x={475} y={1650} />

      <Rectangle colour={colours.yellowOrange} height={300} width={400} radius={10} x={-300} y={1900} />
      <Circle colour={colours.yellowGreen} radius={100} x={-40} y={2250} />
      <Circle colour={colours.peaGreen} radius={75} x={200} y={2200} />

      <Triangle colour={colours.magentaRed} size={300} x={600} y={2250} />
      <Rectangle colour={colours.magenta} height={200} width={250} radius={10} x={800} y={2275} />

      <Rectangle colour={colours.blueViolet} height={200} width={250} radius={10} x={1400} y={1950} />
      <Circle colour={colours.greenCyan} radius={100} x={1500} y={2100} />

      <Rectangle colour={colours.violetMagenta} height={300} width={200} radius={10} x={250} y={2800} />
      <Triangle colour={colours.cyan} size={250} x={200} y={2775} />

      <Circle colour={colours.green} radius={150} x={800} y={3100} />
      <Rectangle colour={colours.violet} height={220} width={200} radius={10} x={1000} y={3000} />
      <Triangle colour={colours.redOrange} size={50} x={1175} y={2975} />

    </Container>
  );
}

const Container = styled.svg`
  min-height: 3350px;
  width: 100%;
  position: absolute;
`;