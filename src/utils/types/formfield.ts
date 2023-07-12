export type InputPropsType = {
  name: string;
  label: string;
  placeholder?: string;
}

export type TextAreaPropsType = InputPropsType & {
  maxLength: number;
}