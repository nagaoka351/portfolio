import SectionClientSize from '@/shared/components/blocks/SectionClientSize';
import ExportedImage from 'next-image-export-optimizer';
import styles from './profile.module.css';
import { profileContents } from '@/shared/contents/contents';
// import ArticleBrock from './ArticleBlock';
const ArticleBrockProfile: React.FC<{
  className: string;
  title: string;
  data: string[];
}> = ({ className, title, data }) => {
  return (
    <article className={`${className} ${styles.lettersBlock}`}>
      <h2>{title}</h2>
      {data.map((v) => (
        <p key={v}>{v}</p>
      ))}
    </article>
  );
};

const Profile = () => {
  return (
    <SectionClientSize className={styles.profile} id="profile">
      <h1>{profileContents['title']}</h1>
      <article className={styles.face}>
        <h2>{profileContents['user']['name']}</h2>
        <ExportedImage
          className={styles.face_img}
          src={profileContents['user']['face']}
          alt="photo"
          width={100}
          height={100}
          priority
        />
      </article>
      <ArticleBrockProfile
        className="styles.skill"
        title={profileContents['skill']['title']}
        data={profileContents['skill']['contents']}
      />
      <ArticleBrockProfile
        className="styles.about"
        title={profileContents['about']['title']}
        data={profileContents['about']['contents']}
      />
      <ArticleBrockProfile
        className="styles.work"
        title={profileContents['work']['title']}
        data={profileContents['work']['contents']}
      />
      {/* <article className={`${styles.skill} ${styles.lettersBlock}`}>
        <h2>{profileContents['skill']['title']}</h2>
        {Object.entries(profileContents['skill']['contents']).map(([k, v]) => (
          <p key={k}>{v}</p>
        ))}
      </article>
      <article className={`${styles.about} ${styles.lettersBlock}`}>
        <h2>{profileContents['about']['title']}</h2>
        {Object.entries(profileContents['about']['contents']).map(([k, v]) => (
          <p key={k}>{v}</p>
        ))}
      </article>
      <article className={`${styles.work} ${styles.lettersBlock}`}>
        <h2>{profileContents['work']['title']}</h2>
        {Object.entries(profileContents['work']['contents']).map(([k, v]) => (
          <p key={k}>{v}</p>
        ))}
      </article> */}
    </SectionClientSize>
  );
};
export default Profile;
