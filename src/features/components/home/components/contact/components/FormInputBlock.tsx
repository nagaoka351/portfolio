import { FC } from 'react';
import { FormItemDictType } from '../utils/genFormItemDict';
import styles from './../contact.module.css';
import { ErrorListType } from '../utils/checkInputErrors';

/**  idでinputかtextareaに振り分けるだけのcomponent */
const IdentifyInput: FC<FormItemDictType> = (formItems) => {
  const { subject, id, name, value, placeholder, onChange } = formItems;
  switch (id) {
    case 'inquiry':
      return (
        <div className={styles.inquiry}>
          <p>{subject}</p>
          <textarea
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      );
    default:
      return (
        <div className={styles.inquiry}>
          <span>{subject}</span>
          <input
            type="text"
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            autoComplete={id}
          />
        </div>
      );
  }
};

/** フォームの入力項目 */
const FormInputBlock: FC<{
  formItems: FormItemDictType;
  errorList?: ErrorListType;
}> = ({ formItems, errorList }) => {
  const { subject, id, name, value, placeholder, onChange } = formItems;

  return (
    <div>
      <label htmlFor={id}>
        <IdentifyInput
          {...{ subject, id, name, value, placeholder, onChange }}
        />
      </label>
      {/* 入力エラーのメッセージ */}
      {errorList && !errorList[id]['ok'] && (
        <div className={styles.emptyMsg}>{errorList[id]['msg']}</div>
      )}
    </div>
  );
};

export default FormInputBlock;
