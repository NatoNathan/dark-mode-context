import * as React from 'react';

export type BtnProps = {
  onClick?: () => void;
  className?: string;
};

export const DarkBtn = ({ onClick, className }: BtnProps) => (
  <button
    className={`${
      className ??
      `bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`
    }`}
    onClick={onClick}
  >
    Dark Mode
  </button>
);
