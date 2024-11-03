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

export interface ICheckboxProps {
  checked?: boolean;
  onClick?: () => void;
}