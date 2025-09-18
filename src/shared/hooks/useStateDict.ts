'use client';
import { ActionDispatch, useReducer } from 'react';

type UseTempReducerType = [
  Record<string, string>,
  ActionDispatch<
    [
      action: {
        type: string;
        key: string;
        value: string;
      }
    ]
  >
];

const useTempReducer = (keys: string[]): UseTempReducerType => {
  const reducerFunc = (
    state: Record<string, string>,
    action: { type: string; key: string; value: string }
  ) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.key]: action.value };
      default:
        return state;
    }
  };
  const initState = keys.reduce((acc, key) => ({ ...acc, [key]: '' }), {});
  return useReducer(reducerFunc, initState);
};

type UseStateDictType = {
  [key: string]: {
    state: string;
    setState: (value: string) => void;
  };
};

/** reducerを使ってarrayから、{ key: { state, setState } }形式の辞書を返すhook。
 * 辞書のstate部分はstring only
 */
const useStateDict = (keys: string[]): UseStateDictType => {
  const [state, dispatch] = useTempReducer(keys);
  return keys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        state: state[key],
        setState: (value: string) =>
          dispatch({ type: 'update', key: key, value: value }),
      },
    }),
    {}
  );
};

export { useStateDict };
export type { UseStateDictType };
