import SectionClientSize from '@/shared/components/blocks/SectionClientSize';
import styles from './omake.module.css';

import { omakeContents } from '@/shared/contents/contents';
const OmakeMain = () => {
  return (
    <SectionClientSize className={styles.omake} id="omake">
      <h1>{omakeContents['title']}</h1>
      <article>
        <h2>{omakeContents['subtitle']}</h2>
        {Object.entries(omakeContents['contents']).map(([k, v], index) => (
          <article key={index}>
            <h2>{k}</h2>
            <p>{v}</p>
          </article>
        ))}
      </article>
    </SectionClientSize>
  );
};

export default OmakeMain;
