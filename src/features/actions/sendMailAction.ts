'use server';
import { MAIL_SERVER_URL } from '@/shared/constants';
import axios from 'axios';

const toGasQueryPramsFormat = (formData: FormData) => {
  const newFormData = Object.fromEntries(
    Object.entries(formData).filter(([, v]) => typeof v === 'string')
  ) as Record<string, string>;
  const params = new URLSearchParams(newFormData);
  return params.toString();
};

const translateErrorDict: Record<string, string> = {
  'Failed to send email: no recipient':
    '指定されたメールアドレスは存在していないようです。',
};

const sendMailAction = async (
  state: { ok: boolean; msg: string },
  formData: FormData
): Promise<{
  ok: boolean;
  msg: string;
}> => {
  const gasQueryPrams = toGasQueryPramsFormat(formData);

  try {
    if (!MAIL_SERVER_URL) throw new Error('not found MAIL_SERVER_URL');
  } catch (err) {
    return { ok: false, msg: String(err) };
  }

  try {
    const response = await axios.post(MAIL_SERVER_URL, gasQueryPrams);
    if (response.status != 200) {
      console.log(response.data);
      throw new Error('Failed to submit the form');
    }
    // client側に返すためthrowしない
    if (response.data.error) {
      const err = response.data.error;
      const msg = translateErrorDict[String(err)] || String(err);
      console.log(msg);
      return { ok: false, msg: msg };
    } else {
      return { ok: true, msg: 'ok' };
    }
  } catch (err) {
    console.log(err);
    return { ok: false, msg: String(err) };
  }
};

export { sendMailAction };
