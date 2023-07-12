import React from "react";
import { TextAreaPropsType } from "@/utils/types/formfield";

import styles from "./textarea.module.css";

export default function TextArea({name, label, maxLength}: TextAreaPropsType) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} maxLength={maxLength}/>
    </div>
  )
}