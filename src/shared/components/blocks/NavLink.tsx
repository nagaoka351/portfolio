'use client';
import { usePathname } from 'next/navigation';
import { useCurrentRef } from '@/shared/context/RefContext';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type NavLink = {
  children: ReactNode[] | ReactNode;
  jumpPath: string;
  refName: string;
};

const NavLink: FC<NavLink> = ({ children, jumpPath, refName }) => {
  const { clickHandler } = useCurrentRef();
  const pathName = usePathname();
  // console.log(jumpPath);
  const temp = jumpPath.includes('#')
    ? jumpPath.slice(0, jumpPath.indexOf('#'))
    : jumpPath;
  const hrefPath = jumpPath[0] == '/' ? temp : pathName + jumpPath;
  // console.log(`test: ${hrefPath}  ${jumpPath}`);

  return (
    <Link
      href={hrefPath}
      onClick={(event) => clickHandler(event, jumpPath, refName)}
    >
      {children}
    </Link>
  );
};
export default NavLink;
