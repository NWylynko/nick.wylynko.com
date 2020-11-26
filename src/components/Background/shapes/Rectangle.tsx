import React from "react";

interface RectangleProps {
  colour: string;
  height: number;
  width: number;
  radius?: number;
  x: number;
  y: number;
}

export const Rectangle = ({
  colour,
  height,
  width,
  radius = 0,
  x,
  y,
}: RectangleProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        style={{ fill: colour, mixBlendMode: "lighten" }}
        width={width}
        height={height}
        rx={radius}
      />
    </g>
  );
};
