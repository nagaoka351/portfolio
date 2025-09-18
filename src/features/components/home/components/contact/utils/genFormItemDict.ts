import { map2 } from './map2';
import { ChangeEvent, ChangeEventHandler } from 'react';
import { UseStateDictType } from '@/shared/hooks/useStateDict';
import { formContents } from '@/shared/contents/contents';
type FormItemDictType = {
  subject: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

/** formの項目データ。引数のuseStateの辞書とinitFormDataを合成した辞書形式の戻り値。 */
const genFormItemDict = (formStates: UseStateDictType): FormItemDictType[] => {
  const tempFormData = Object.values(formStates).map((payload) => ({
    value: payload.state,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      payload.setState(e.target.value),
  }));
  // 2つのjson配列を要素ごとにペアにする
  return map2((x, y) => ({ ...x, ...y }), formContents, tempFormData);
};

export { genFormItemDict };
export type { FormItemDictType };
