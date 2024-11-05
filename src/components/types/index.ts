// IconProps.ts
export interface IconProps {
  icon: string;
  color?: string;
  onClick?: () => void;
  rotation?: string;
  width?: number;
  height?: number;
  position?: string;
  cursor?: string;
  activeLinks?: boolean;
 style?: React.CSSProperties;
}

export interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  label?: string;
  placeholder?: string;
  hint?: string;
  isError?: boolean;
}

export interface ImperativeHandle {
  getValue: () => string;
   setValue: (value: string) => void;
  focus: () => void;
}

export interface ICheckboxProps {
  checked?: boolean;
  onClick?: () => void;
}

export interface ITextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement>  {
  label?: string;
  placeholder?: string;
  hint?: string;
  isError?: boolean;
}

export interface IOnboardingBannerProps {
  onboarding_stage: string | number;
}

export interface ILinkInputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  label?: string;
  placeholder?: string;
  hint?: string;
  isError?: boolean;
}