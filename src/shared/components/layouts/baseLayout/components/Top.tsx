'use client';
import { useCurrentRef } from '@/shared/context/RefContext';

const Top = () => {
  const { refs } = useCurrentRef();
  return <div id="top" ref={refs['top']} />;
};
export default Top;
