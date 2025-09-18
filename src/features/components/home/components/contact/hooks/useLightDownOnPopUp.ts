'use client';
import { RefObject, useEffect } from 'react';
import { useRefReady } from '@/shared/hooks/useRefReady';

type LightDownEffectStatesType<RefType extends HTMLElement = HTMLFormElement> =
  {
    isLightDown: boolean;
    bgColorPropertyName: string;
    popUpRef: RefObject<RefType>;
  };

/** popupのときbodyを暗くするhook。
 * @is bool
 * @name string */
const useLightDownOnPopUp = (
  lightDownEffectStates: LightDownEffectStatesType
) => {
  // merge effect states
  const defaultEffectStates = {
    rootSelector: ':root',
    bodySelector: 'body',
    lightDownColor: 'rgb(0,0,0,0.6)',
  };
  const {
    isLightDown,
    bgColorPropertyName,
    popUpRef,
    rootSelector,
    bodySelector,
    lightDownColor,
  } = { ...lightDownEffectStates, ...defaultEffectStates };

  const isReady = useRefReady(popUpRef);

  /** css側でinheritを設定し忘れた時の補助 */
  const changeCss = (selectors: string[]) => {
    selectors.map((selector) => {
      const els = document.querySelectorAll(selector);
      if (els) {
        [...els].map(
          //styleのところでエラーがでるためelをキャスト
          (el) => ((el as HTMLElement).style.backgroundColor = 'inherit')
        );
      }
    });
  };

  // onMount
  useEffect(() => {
    if (!isReady) return;
    //document.documentElementではうまくいかないためquerySelectorを使用
    const rootEl = document.querySelector(rootSelector)!;
    const bgColor =
      getComputedStyle(rootEl).getPropertyValue(bgColorPropertyName);
    if (!bgColor) return;

    if (isLightDown) {
      const bodyEl = document.querySelector<HTMLBodyElement>(bodySelector!);
      changeCss(['input', 'textarea']);
      //
      const popUpEl = popUpRef?.current;

      if (popUpEl && bodyEl) {
        popUpEl.style.backgroundColor = bgColor;
        bodyEl.style.backgroundColor = lightDownColor;
      } else if (bodyEl) {
        bodyEl.style.backgroundColor = lightDownColor;
      }
    }

    //クリーンアップ関数
    return () => {
      const bodyEl = document.querySelector<HTMLBodyElement>(bodySelector);
      if (bodyEl) {
        bodyEl.style.backgroundColor = bgColor;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLightDown, isReady]);
};

export { useLightDownOnPopUp };
export type { LightDownEffectStatesType };
