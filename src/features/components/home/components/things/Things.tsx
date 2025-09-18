import SectionClientSize from '@/shared/components/blocks/SectionClientSize';
import styles from './things.module.css';
import { FC } from 'react';
import { thingsContents } from '@/shared/contents/contents';

type ArticleBrockThingsType = {
  className: string;
  title: string;
  data: Record<string, string>;
};
const ArticleBrockThings: FC<ArticleBrockThingsType> = ({
  className,
  title,
  data,
}) => {
  return (
    <article className={className}>
      <h2>{title}</h2>
      {Object.entries(data).map(([k, v]) => (
        <article key={k} className={styles.lettersBlock}>
          <h2>{k}</h2>
          <p>{v}</p>
        </article>
      ))}
    </article>
  );
};

const Things = () => {
  return (
    <SectionClientSize className={styles.things} id="things">
      <h1>{thingsContents['title']}</h1>

      <ArticleBrockThings
        className="styles.thinking"
        title={thingsContents['thinking']['title']}
        data={thingsContents['thinking']['contents']}
      />
      <ArticleBrockThings
        className="styles.growthTarget"
        title={thingsContents['growthTarget']['title']}
        data={thingsContents['growthTarget']['contents']}
      />
    </SectionClientSize>
  );
};
export default Things;
