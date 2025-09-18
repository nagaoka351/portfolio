import { checkInputErrors, ErrorListType } from './checkInputErrors';
import { Dispatch, SetStateAction } from 'react';
import { UseStateDictType } from '@/shared/hooks/useStateDict';

const formButtonFuncs = ({
  formStates,
  setErrorList,
  setHasConfirmed,
}: {
  formStates: UseStateDictType;
  setErrorList: Dispatch<SetStateAction<ErrorListType>>;
  setHasConfirmed: Dispatch<SetStateAction<boolean>>;
}) => ({
  /** change: (setErrorList, setHasConfirmed)*/
  onConfirm: () => {
    const tempErrorList = checkInputErrors(formStates);
    setErrorList(tempErrorList);
    // ここはuseStateを通して判定しようとすると、非同期処理の仕様で失敗する
    // useEffectか戻り値を使う
    const isNotInputError = Object.values(tempErrorList).every(
      (value) => value.ok
    );
    if (isNotInputError) {
      setHasConfirmed(true);
    }
  },

  /** change: setHasConfirmed*/
  onCancel: () => {
    setHasConfirmed(false);
  },
});

export { formButtonFuncs };
