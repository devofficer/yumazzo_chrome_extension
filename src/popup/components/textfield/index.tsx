import React from "react";
import { InputPropsType } from "@/utils/types/formfield";
import { classNames } from "@/utils/helpers/css";

import styles from "./textfield.module.css";

const sizeStyles = {
  "half": styles.half,
  "full": styles.full
}

export default function TextField({name, label, size = "half", unit}: InputPropsType) {
  return (
    <div className={classNames(styles.wrapper, sizeStyles[size])}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.container}>
        <input name={name} type="text"/>
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
    </div>
  )
}