import * as React from 'react';
import DarkModeContext from '../contexts/DarkModeContext';
import { Menu } from '@headlessui/react';
import { DarkBtn } from './DarkBtn';
import { LightBtn } from './LightBtn';
import { SystemBtn } from './SystemBtn';
import { MenuToggleBtn } from './MenuToggleBtn';

export type DarkModeMenuProps = {
  as: React.ElementType;
  className?: string;
  menuToggleBtn?: React.ElementType;
  darkBtn?: React.ElementType;
  lightBtn?: React.ElementType;
  systemBtn?: React.ElementType;
};
const DarkModeMenu = ({
  as = React.Fragment,
  className,
  darkBtn = DarkBtn,
  lightBtn = LightBtn,
  systemBtn = SystemBtn,
  menuToggleBtn = MenuToggleBtn
}: DarkModeMenuProps) => {
  const { isDarkMode, isSystem, setDarkMode } =
    React.useContext(DarkModeContext);
  const Dbtn = darkBtn;
  const Lbtn = lightBtn;
  const Sbtn = systemBtn;
  const MToggleBtn = menuToggleBtn;

  return (
    <Menu as={as} className={className}>
      <Menu.Button as={MToggleBtn} />
      <Menu.Items>
        {darkBtn ? (
          <Menu.Item disabled={isDarkMode}>
            <Dbtn onClick={setDarkMode(true)} />
          </Menu.Item>
        ) : (
          ''
        )}
        {lightBtn ? (
          <Menu.Item disabled={!isDarkMode}>
            <Lbtn onClick={setDarkMode(false)} />
          </Menu.Item>
        ) : (
          ''
        )}
        {systemBtn ? (
          <Menu.Item disabled={isSystem}>
            <Sbtn onClick={setDarkMode(false)} />
          </Menu.Item>
        ) : (
          ''
        )}
      </Menu.Items>
    </Menu>
  );
};

export default DarkModeMenu;
