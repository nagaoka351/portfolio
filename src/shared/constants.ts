// const getEnvOrThrow = (key: string) => {
//   const value = process.env[key];
//   console.log(value);
//   if (value === undefined) throw new Error(`${value}\n${key} is not defined.`);
//   return value;
// };

// export const MAIL_SERVER_URL = getEnvOrThrow('NEXT_PUBLIC_MAIL_SERVER_URL');
// export const VERCEL_URL = getEnvOrThrow('NEXT_PUBLIC_VERCEL_URL');
export const MAIL_SERVER_URL = process.env.NEXT_PUBLIC_MAIL_SERVER_URL;
