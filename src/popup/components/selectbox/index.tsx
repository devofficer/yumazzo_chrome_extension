import React, { useState, useRef } from 'react';

import styles from './selectbox.module.css';
import { SelectBoxPropsType } from '@/utils/types/selectbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { classNames } from '@/utils/helpers/css';

const sizeStyles = {
  'half': styles.half,
  'full': styles.full
};

export default function SelectBox({name, label, size = 'half', items}: SelectBoxPropsType) {
  const inputRef = useRef(null);
  const [text, setText] = useState<string>('');
  const [value, setValue] = useState<string | number>('');

  return (
    <div className={classNames(styles.container, sizeStyles[size])}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.wrapper} onClick={() => {inputRef.current.focus();}}>
        <div className={styles.select}>
          <span className={styles.label}>{text}</span>
          <input ref={inputRef} className={styles.input} type="text" readOnly name={name} value={value}/>
          <FontAwesomeIcon icon={faChevronDown}/>
        </div>
        <div className={styles.menu}>
          {items.map((item: {label: string; value: string | number}, idx: number) => {
            return (
              <div 
                key={idx}
                className={styles.menuItem} 
                onMouseDown={() => {
                  setText(item.label);
                  setValue(item.value);
                }}
              >
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}