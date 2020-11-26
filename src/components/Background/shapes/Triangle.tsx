import React from "react";

interface TriangleProps {
  colour: string;
  size: number;
  x: number;
  y: number;
}

export const Triangle = ({ colour, size, x, y }: TriangleProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <polygon
        style={{ fill: colour, mixBlendMode: "lighten" }}
        points={`${size / 2},0 0,${size} ${size},${size}`}
        rx={5}
      />
    </g>
  );
};
