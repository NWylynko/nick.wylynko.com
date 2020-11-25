import React from 'react';

interface CircleProps {
  colour: string;
  radius: number;
}

export const Circle = ({colour, radius}: CircleProps) => {
  return (
    <svg style={{ height: radius * 2, width: radius * 2 }}>
      <circle style={{ fill: colour }} cx={radius} cy={radius} r={radius} />
    </svg>
  )
}