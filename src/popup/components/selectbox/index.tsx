import React, { useState, useRef } from "react";

import styles from "./selectbox.module.css"
import { SelectBoxPropsType } from "@/utils/types/selectbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "@/utils/helpers/css";

const sizeStyles = {
  "half": styles.half,
  "full": styles.full
}

const items = [
  {label: "One", value: "One"},
  {label: "Two", value: "Two"},
  {label: "Three", value: "Three"}
]

export default function SelectBox({name, label, size}: SelectBoxPropsType) {
  const inputRef = useRef(null);
  const [value, setValue] = useState<string | number>("");

  return (
    <div className={classNames(styles.container, sizeStyles[size])}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.wrapper}>
        <div className={styles.select}>
          <input className={styles.input} type="text" readOnly name={name} value={value}/>
          <FontAwesomeIcon icon={faChevronDown}/>
        </div>
        <div className={styles.menu}>
          {items.map((item: {label: string; value: string | number}, idx: number) => {
            return (
              <div 
                key={idx}
                className={styles.menuItem} 
                onMouseDown={() => {
                  setValue(item.value)
                }}
              >
                <span>{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}