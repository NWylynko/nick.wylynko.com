import React from 'react';

interface RectangleProps {
  colour: string;
  height: number;
  width: number;
  radius?: number;
}

export const Rectangle = ({ colour, height, width, radius = 0 }: RectangleProps) => {
  return (
    <svg style={{ height, width }}>
      <rect style={{ fill: colour }} width={width} height={height} rx={radius} />
    </svg>
  )
}

