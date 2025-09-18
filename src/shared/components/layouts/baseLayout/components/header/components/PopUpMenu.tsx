'use client';
import { FC, ReactNode, useState } from 'react';

type PopUpMenuType = {
  children: ReactNode[] | ReactNode;
  basicPoint: ReactNode;
};

/** onMouseの時にmenuをpopupさせるコンポーネント。
 * childrenはmenuList。
 * basicPointはmenuを展開するためのボタンとかアイコンなどのelementタグを想定。 */
const PopUpMenu: FC<PopUpMenuType> = ({ children, basicPoint }) => {
  const [isPopUpMenuVisible, setPopUpMenuVisible] = useState(false);
  const onMouse = () => setPopUpMenuVisible(true);
  const leaveMouse = () => setPopUpMenuVisible(false);

  return (
    <div onMouseEnter={onMouse} onMouseLeave={leaveMouse}>
      {basicPoint}
      {isPopUpMenuVisible && (
        <div onClick={leaveMouse} onMouseLeave={leaveMouse}>
          {children}
        </div>
      )}
    </div>
  );
};

export default PopUpMenu;
