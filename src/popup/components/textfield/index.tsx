import React from "react";
import { InputPropsType } from "@/utils/types/formfield";

import styles from "./textfield.module.css";


export default function TextField({name, label}: InputPropsType) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type="text"/>
    </div>
  )
}