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

  /**  change: (setHasSubmitted, setHasConfirmed) */
  // onSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
  //   // const onSubmit = async (event: React.MouseEvent<HTMLInputElement>) => {
  //   e.preventDefault();

  //   const formEl = formRef?.current;
  //   // if (!submitFormWithCatch(formEl, MAIL_SERVER_URL)) return;
  //   // submitFormWithCatch(formEl, MAIL_SERVER_URL);
  //   if (formEl) {
  //     // formEl.submit();
  //     const formData = new FormData(e.currentTarget);
  //     const formData2 = formIdList.reduce(
  //       (acc, id) => ({ ...acc, [id]: formData.get(id)!.toString() }),
  //       {} as Record<string, string>
  //     );
  //     const res = await sendMailAction(formData2);
  //     console.log(res);
  //     if (!res.data.ok) {
  //       setIsInquirySuccessful(false);
  //       if (res.data.error) setInquirySuccessfulMsg(res.data.error);
  //     } else {
  //       setIsInquirySuccessful(true);
  //     }
  //     setHasSubmitted(true);
  //     setHasConfirmed(false);
  //   }
  // },
});

export { formButtonFuncs };
