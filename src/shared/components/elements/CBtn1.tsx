import React, { FC, MouseEventHandler, ReactNode } from 'react';
import styled, { RuleSet } from 'styled-components';

type CBtnType = {
  className?: string;
  children: ReactNode[] | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  addStyle?: RuleSet<object> | string;
  type?: 'button' | 'reset' | 'submit' | undefined;
};

const BtnDef = styled.button`
  color: inherit;
  background-color: inherit;
  font-size: 1.2em;
  border: 5px solid var(--font-color1);
  border-radius: 10px;
  &:hover {
    opacity: 0.5;
  }
`;

type BtnType = {
  $addStyle?: RuleSet<object> | string;
};
const Btn = styled(BtnDef)<BtnType>`
  ${({ $addStyle }) => $addStyle}
`;

/** スタイル入りのを試しに作りはしたけど、コードもレイアウトも全体の見通しが悪くなって読みづらい感じがする*/
const CBtn1: FC<CBtnType> = ({
  children,
  className,
  onClick,
  addStyle,
  type = 'button',
}) => {
  return (
    <Btn
      className={className}
      type={type}
      onClick={onClick}
      $addStyle={addStyle}
    >
      {children}
    </Btn>
  );
};
export default CBtn1;
