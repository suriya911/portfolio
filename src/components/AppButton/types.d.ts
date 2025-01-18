import { ButtonHTMLAttributes } from "react";

type TButtonType = "primary" | "secondary" | "tertiary";

export default interface IAppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: TButtonType;
  buttonText?: string;
  ariaLabel: string;
  onClick: () => void;
}
