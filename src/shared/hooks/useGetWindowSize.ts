'use client';
import { useLayoutEffect, useState } from 'react';

/** クライアントのwidth, heightを取得するフック */
const useGetWindowSize = (): number[] => {
  const [[width, height], setSize] = useState<number[]>([0, 0]);
  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
  };
  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return [width, height];
};

export { useGetWindowSize };
