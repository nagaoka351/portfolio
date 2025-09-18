'use server';
import { MAIL_SERVER_URL } from '@/shared/constants';
import axios from 'axios';

const toGasFormat = (formData: FormData) => {
  const newFormData = Object.fromEntries(
    Object.entries(formData).filter(([, v]) => typeof v === 'string')
  ) as Record<string, string>;
  const params = new URLSearchParams(newFormData);
  return params.toString();
};

const sendMailAction = async (
  state: { ok: boolean; msg: string },
  formData: FormData
): Promise<{
  ok: boolean;
  msg: string;
}> => {
  const newFormData = toGasFormat(formData);

  try {
    if (!MAIL_SERVER_URL) throw new Error('not found MAIL_SERVER_URL');
  } catch (error) {
    return { ok: false, msg: String(error) };
  }
  try {
    const response = await axios.post(MAIL_SERVER_URL, newFormData);
    if (response.status != 200) {
      console.log(response.data);
      throw new Error('Failed to submit the form');
    }
    if (response.data.error) return { ok: false, msg: response.data.error };
    else {
      return { ok: true, msg: 'ok' };
    }
  } catch (error) {
    console.log(error);
    return { ok: false, msg: String(error) };
  }
};

export { sendMailAction };
