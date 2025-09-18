import { useLightDownOnPopUp } from '../hooks/useLightDownOnPopUp';
import { FC, useRef } from 'react';

import styles from './../contact.module.css';
import { contactContents } from '@/shared/contents/contents';
import CBtn1 from '@/shared/components/elements/CBtn1';
import { genFormItemDict } from '../utils/genFormItemDict';
import { UseStateDictType } from '@/shared/hooks/useStateDict';

type FormConfirmType = {
  formStates: UseStateDictType;
  // onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onCancel: () => void;
  hasConfirmed: boolean;
  formAction: (payload: FormData) => void;
};

/** confirm用のcomponents */
const FormConfirm: FC<FormConfirmType> = ({
  formStates,
  // onSubmit,
  onCancel,
  hasConfirmed,
  formAction,
}) => {
  const confirmRef = useRef<HTMLFormElement>(null!);

  // 暗くするやつ
  useLightDownOnPopUp({
    isLightDown: hasConfirmed,
    bgColorPropertyName: '--bg-color1',
    popUpRef: confirmRef,
  });

  const formConfirmStates = genFormItemDict(formStates).map(
    ({ subject, id, value, name }) => ({
      subject,
      id,
      value,
      name,
    })
  );
  return (
    <div className={styles.confirm_relative}>
      {/* <form className={styles.confirm} ref={confirmRef} onSubmit={onSubmit}> */}
      <form
        // method="POST"
        className={styles.confirm}
        ref={confirmRef}
        // target="hiddenIframe"
        // onSubmit={onSubmit}
        action={formAction}
        // action={MAIL_SERVER_URL}
      >
        <div className={styles.confirm_grid}>
          <div>
            {formConfirmStates.map(({ subject, id, value, name }) => {
              switch (id) {
                case 'inquiry':
                  return (
                    <div className={styles.confirmInquiry} key={id}>
                      <p>{subject}</p>
                      {/* <p>{value}</p> */}
                      <textarea name={name} id={id} value={value} readOnly />
                    </div>
                  );
                default:
                  return (
                    <div className={styles.confirmOther} key={id}>
                      {/* {subject}:　{value} */}
                      <span>{subject}:</span>
                      <input name={name} id={id} value={value} readOnly />
                    </div>
                  );
              }
            })}
          </div>
          {/* <button className={styles.submitBtn} type="submit">
          {contactContents['submitBtn']}
          </button> */}
          {/* <CBtn1 className={styles.submitBtn} type="submit"> */}
          <div className={styles.btns}>
            <CBtn1 className={styles.submitBtn} type="submit">
              {contactContents['submitBtn']}
            </CBtn1>
            <CBtn1 className={styles.cancelBtn} onClick={onCancel}>
              {contactContents['cancelBtn']}
            </CBtn1>
          </div>
        </div>
      </form>
      {/* formのactionにページ遷移を起こさせないためのiframeタグ */}
      {/* <iframe name="hiddenIframe" style={{ display: 'none' }} /> */}
    </div>
  );
};
export default FormConfirm;
