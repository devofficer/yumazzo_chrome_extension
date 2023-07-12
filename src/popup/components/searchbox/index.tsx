import React, { KeyboardEventHandler } from "react";

import styles from "./searchbox.module.css";

const items = [{id: 1}, {id: 2}, {id: 3}];

export default function SearchBox() {
  return (
    <div className={styles.wrapper}>
      <input type="search" />
      <div className={styles.container}>
        {items.map((item: {id: number}, idx) => 
          <div key={idx} className={styles.item}>{item.id}</div>
        )}
      </div>
    </div>
  )
}