import { copyright } from '@/shared/contents/contents';
import MoveTopSVG from './svg/MoveTopSVG';
import styles from './footer.module.css';
import NavLink from '@/shared/components/blocks/NavLink';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>{copyright}</span>
      <NavLink jumpPath={'#top'} refName={'top'}>
        <MoveTopSVG />
      </NavLink>
    </footer>
  );
};
export default Footer;
