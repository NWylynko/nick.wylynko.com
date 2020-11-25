import React from "react";

interface TriangleProps {
  colour: string;
  size: number;
}

export const Triangle = ({ colour, size }: TriangleProps) => {
  return (
    <svg style={{ height: size, width: size }}>
      <polygon
        style={{ fill: colour, borderRadius: 10, border: "2px solid black" }}
        points={`${size / 2},0 0,${size} ${size},${size}`}
      />
    </svg>
  );
};
