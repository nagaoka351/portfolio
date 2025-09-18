'use client';
import { useRef, RefObject, useEffect, createRef } from 'react';

/** arrayから辞書形式のcreateRefを返すhook */
const useRefCurrentDict = (menu: string[]) => {
  // 再レンダリングの防止用にuseRefでまとめる;
  // refObjectの型にはnullを含めておくことが必要
  const refs = useRef<Record<string, RefObject<HTMLDivElement | null>>>({});

  useEffect(() => {
    menu.forEach((key) => {
      if (!refs.current[key]) {
        refs.current[key] = createRef<HTMLDivElement>(); // 最初だけ生成
      }
    });
  }, [menu]);

  return refs.current;
};
export { useRefCurrentDict };
