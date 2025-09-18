'use client';
import { usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  MouseEvent,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useState,
} from 'react';
import { headerMenu } from '../contents/contents';
import { useRefReady } from '../hooks/useRefReady';
import { useRefCurrentDict } from '../hooks/useRefCurrentDict';

const initContext = {
  clickHandler: () => {},
  refs: {},
};

// createContextでProvider内で使うuseContextの型を設定
const CurrentRefContext = createContext<{
  clickHandler: (event: MouseEvent, path: string, refName: string) => void;
  refs: Record<string, RefObject<HTMLDivElement | null>>;
}>(initContext);

/**  global変数の変わりにする使用目的からpage.tsxではなく、layout.tsxで囲う必要がある。*/
const CurrentRefProvider = ({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) => {
  const [currentRefName, setCurrentRefName] = useState<string>('');
  const router = useRouter();
  const pathName = usePathname();
  const refs = useRefCurrentDict(['top', ...headerMenu]);
  const isReady = useRefReady(refs[currentRefName]);

  /** menuで使うことを想定 */
  const clickHandler = (e: MouseEvent, jumpPath: string, refName: string) => {
    console.log(jumpPath);
    if (jumpPath == pathName) return;
    /** compare format*/
    const cmpFmt = (path: string) => {
      const temp = path.slice(0, path.indexOf('#'));
      return temp.endsWith('/') ? temp : temp + '/';
    };
    const isIgnore = cmpFmt(jumpPath) === cmpFmt(pathName);
    if (isIgnore) {
      e.preventDefault();
      router.replace(jumpPath);
    } else {
      router.push(jumpPath);
    }
    setCurrentRefName(refName);
  };

  // refやelementにスムーズスクロールを設定
  useEffect(() => {
    if (!isReady) return;
    // ここの宣言でnullでないことを確認しているらしい
    const refEl = refs[currentRefName]?.current;
    if (refEl) {
      refEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentRefName, refs, isReady]);

  return (
    <CurrentRefContext.Provider value={{ refs, clickHandler }}>
      {children}
    </CurrentRefContext.Provider>
  );
};

const useCurrentRef = () => useContext(CurrentRefContext);

export { CurrentRefContext, CurrentRefProvider, useCurrentRef };
