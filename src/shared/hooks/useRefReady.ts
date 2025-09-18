'use client';
import { RefObject, useState, useEffect } from 'react';
/** DOMが反映されるまで待つためのhook */
const useRefReady = (
  ref: RefObject<HTMLDivElement | HTMLFormElement | null>
) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    setIsReady(false);
    const tick = 100;
    const interval = setInterval(() => {
      const refElement = ref?.current;
      if (refElement) {
        setIsReady(true); // DOMの準備完了
        clearInterval(interval); // 監視を停止
      }
    }, tick);

    return () => clearInterval(interval); // クリーンアップ
  }, [ref]);

  return isReady;
};

export { useRefReady };
