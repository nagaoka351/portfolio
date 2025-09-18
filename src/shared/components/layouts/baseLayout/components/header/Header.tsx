'use client';
import PopUpMenu from './components/PopUpMenu';
import { headerBaseMenu } from '@/shared/contents/contents';
import { useGetWindowSize } from '@/shared/hooks/useGetWindowSize';
import MenuSvg from './svg/MenuSvg';
import styles from './header.module.css';
import NavLink from '@/shared/components/blocks/NavLink';

/** menuの中身 */
const Menu = () => {
  return (
    <>
      {headerBaseMenu.map((item) => (
        <li key={item}>
          <NavLink jumpPath={`/#${item}`} refName={item}>
            {item}
          </NavLink>
        </li>
      ))}
      <li>
        <NavLink jumpPath={'/omake'} refName={'omake'}>
          {'omake'}
        </NavLink>
      </li>
    </>
  );
};
const MenuDisplay = ({ isLineMenu }: { isLineMenu: boolean }) => {
  return isLineMenu ? (
    <ul className={styles.lineMenu}>
      <Menu />
    </ul>
  ) : (
    <PopUpMenu basicPoint={<MenuSvg />}>
      <ul className={styles.popUpMenu}>
        <Menu />
      </ul>
    </PopUpMenu>
  );
};

const Header = () => {
  const [width] = useGetWindowSize();
  const isLineMenu = 600 < width;

  return (
    <header className={styles.header}>
      <div>
        <MenuDisplay isLineMenu={isLineMenu} />
      </div>
    </header>
  );
};
export default Header;
