import React, { ChangeEvent, useState } from "react";
import { TextAreaPropsType } from "@/utils/types/formfield";

import styles from "./textarea.module.css";

export default function TextArea({
  name, 
  label, 
  maxLength, 
  placeholder
}: TextAreaPropsType) {
  const [characterCount, setCharacterCount] = useState<number>(0);  

  const handleHelper = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCharacterCount(e.target.value.length);
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <textarea 
        id={name}
        name={name} 
        maxLength={maxLength} 
        placeholder={placeholder}
        onChange={handleHelper}
      />
      <span className={styles.helper}>{characterCount}/{maxLength} Characters</span>
    </div>
  )
}