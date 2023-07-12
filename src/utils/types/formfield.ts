export type InputPropsType = {
  name: string;
  label: string;
  size?: string;
  unit?: string;
  placeholder?: string;
}

export type TextAreaPropsType = InputPropsType & {
  maxLength: number;
}