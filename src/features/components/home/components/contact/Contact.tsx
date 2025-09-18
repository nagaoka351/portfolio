'use client';
import CBtn1 from '@/shared/components/elements/CBtn1';
import SectionClientSize from '@/shared/components/blocks/SectionClientSize';
import { useActionState, useEffect, useRef, useState } from 'react';
import type { ErrorListType } from './utils/checkInputErrors';
import FormConfirm from './components/FormConfirm';
import styles from './contact.module.css';
import { genFormItemDict } from './utils/genFormItemDict';
import { formIdList } from './utils/formIdList';
import { contactContents } from '@/shared/contents/contents';
import { formButtonFuncs } from './utils/formButtonFuncs';
import FormInputBlock from './components/FormInputBlock';
import { useStateDict } from '@/shared/hooks/useStateDict';
import { sendMailAction } from '@/features/actions/sendMailAction';

const Contact = () => {
  // const formStates: StateDictType = useStateDict(formIdList);
  // const { useStateDict, StateDictType } = useStateDict<string>();
  // type StateDictType = typeof StateDictType;
  const formStates = useStateDict(formIdList);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [hasConfirmed, setHasConfirmed] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null!);

  const initErrorList = formIdList.reduce(
    (acc, id) => ({
      ...acc,
      [id]: { ok: true, msg: 'init' },
    }),
    {} as ErrorListType
  );
  const [errorList, setErrorList] = useState<ErrorListType>(initErrorList);

  const { onConfirm, onCancel } = formButtonFuncs({
    formStates,
    setHasConfirmed,
    setErrorList,
  });
  const [actionFormState, formAction] = useActionState(sendMailAction, {
    ok: false,
    msg: '',
  });
  useEffect(() => {
    setHasSubmitted(true);
    setHasConfirmed(false);
  }, [actionFormState]);

  return (
    <SectionClientSize className={styles.contact} id="contact">
      <h1>{contactContents['title']}</h1>
      <article>
        {/* 送信前 */}
        {(!hasSubmitted || !actionFormState.ok) && (
          <form name="mailForm" ref={formRef}>
            {/* formの入力部分 */}
            {genFormItemDict(formStates).map((formItems) => (
              // formInputs(formItems, errorList)
              <FormInputBlock
                key={formItems.id}
                formItems={formItems}
                errorList={errorList}
              />
            ))}

            {/* ボタン */}
            <div className={styles.button}>
              <CBtn1 className={styles.confirmBtn} onClick={onConfirm}>
                {contactContents['confirmBtn']}
              </CBtn1>
            </div>
          </form>
        )}

        {/* 送信後 */}
        {hasSubmitted && actionFormState.ok && (
          <div className={styles.afterSubmit}>
            <div>{contactContents['submittedMsg']}</div>
          </div>
        )}
        {hasSubmitted && !actionFormState.ok && (
          <div className={styles.emptyMsg}>
            <div>{actionFormState.msg}</div>
          </div>
        )}
        {/* formのactionにページ遷移を起こさせないためのiframeタグ */}
        {/* <iframe name="hiddenIframe" style={{ display: 'none' }} /> */}

        {/* confirm */}
        {hasConfirmed && (
          <FormConfirm
            {...{ formStates, onCancel, hasConfirmed, formAction }}
          />
        )}
      </article>
    </SectionClientSize>
  );
};

export default Contact;
