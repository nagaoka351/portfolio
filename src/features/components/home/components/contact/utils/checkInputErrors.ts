import { UseStateDictType } from '@/shared/hooks/useStateDict';

type ErrorListType = {
  [key: string]: {
    ok: boolean;
    msg: string;
  };
};

/** formの入力が正常化どうかの判定に使う。*/
const checkInputErrors = (FormStates: UseStateDictType) => {
  const checkErrors = (title: string, letters: string) => {
    // config
    const inquiryMaxLength = 600;

    // dict, simplify
    const checks: Record<string, () => boolean> = {
      empty: () => letters === '' || Boolean(letters.match(/[　\s]+/)),
      notKana: () => !/^[ァ-ヴー　 ]+$/.test(letters),
      notEmail: () => !/^[\w.%+-]+@[\w.-]+$/.test(letters),
      notLettersUnderTarget: () => letters.length > inquiryMaxLength,
    };
    const msgs: Record<string, string> = {
      empty: ' 空白です。',
      notKana: '全角カタカナで入力して下さい。',
      notEmail: 'Emailの形式ではありません。',
      notLettersUnderTarget: `文字数は${inquiryMaxLength}までです。`,
    };

    // find error
    const findError = (keys: string[]) => {
      const firstErrorKey = keys.find((key) => checks[key]());
      return firstErrorKey
        ? { [title]: { ok: false, msg: msgs[firstErrorKey] } }
        : { [title]: { ok: true, msg: '入力は正常です' } };
    };

    // find dict
    const findErrorDict: Record<string, () => ErrorListType> = {
      user: () => findError(['empty']),
      furigana: () => findError(['empty', 'notKana']),
      email: () => findError(['empty', 'notEmail']),
      inquiry: () => findError(['empty', 'notLettersUnderTarget']),
    };
    const notFoundTitle = {
      [title]: {
        ok: false,
        msg: 'not found title in dict.',
      },
    };
    return findErrorDict[title]() ?? notFoundTitle;
  };

  // make error list
  const tempErrorList = Object.entries(FormStates).reduce(
    (acc, [title, dict]) => {
      return { ...acc, [title]: { ok: true, msg: '入力は正常です' } };
      const letters = dict.state;
      const state = checkErrors(title, letters);
      return { ...acc, ...state };
    },
    {} as ErrorListType
  );

  // result
  return tempErrorList;
};

export { checkInputErrors };
export type { ErrorListType };
