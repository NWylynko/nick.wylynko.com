import React from "react";

interface CircleProps {
  colour: string;
  radius: number;
  x: number;
  y: number;
}

export const Circle = ({ colour, radius, x, y }: CircleProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle
        style={{ fill: colour, mixBlendMode: "lighten" }}
        cx={radius}
        cy={radius}
        r={radius}
      />
    </g>
  );
};
