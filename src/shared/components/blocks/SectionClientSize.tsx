'use client';
import { useCurrentRef } from '@/shared/context/RefContext';
import { useGetWindowSize } from '@/shared/hooks/useGetWindowSize';
import { FC, ReactNode } from 'react';

type SectionClientSizeProps = {
  children: ReactNode[] | ReactNode;
  className: string;
  id: string;
};

/** heightをclientのサイズにするためのコンポーネント */
const SectionClientSize: FC<SectionClientSizeProps> = ({
  children,
  className,
  id,
}) => {
  const [, height] = useGetWindowSize();
  const { refs } = useCurrentRef();

  return (
    <section
      className={className}
      id={id}
      style={{ minHeight: height }}
      ref={refs[id]}
    >
      {children}
    </section>
  );
};
export default SectionClientSize;
