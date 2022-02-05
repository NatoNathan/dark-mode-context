import * as React from 'react';
// eslint-disable-next-line no-unused-vars
import { BtnProps } from './DarkBtn';

export const MenuToggleBtn = ({ onClick, className }: BtnProps) => (
  <button
    className={
      className ??
      'bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
    }
    onClick={onClick}
  >
    Dark Mode Menu
  </button>
);
