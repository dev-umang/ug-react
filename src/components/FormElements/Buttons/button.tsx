import {ReactNode} from "react";

export interface IButton {
  label?: string;
  children?: ReactNode;
  background?: string;
}

export const Button = (p: IButton) => {
  return (
    <button style={{background: p.background}} className={`ug_button`}>
      {p.children ?? p.label}
    </button>
  );
};
