import Contact from './components/contact/Contact';
import Profile from './components/profile/Profile';
import Things from './components/things/Things';
import BaseLayout from '@/shared/components/layouts/baseLayout/BaseLayout';

const Home = () => {
  return (
    <BaseLayout>
      <Profile />
      <Things />
      <Contact />
    </BaseLayout>
  );
};
export default Home;
