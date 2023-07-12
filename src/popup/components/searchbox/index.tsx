import React, { KeyboardEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

import styles from "./searchbox.module.css";
import CountryFlag from "../countryflag";
import NoteSticky from "../notesticky";

const items = [{id: 1, status: "easy"}, {id: 2, status: "medium"}, {id: 3, status: "hard"}];

export default function SearchBox() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input className={styles.searchInput} type="text" placeholder="Search cruisine"/>
      </div>
      <div className={styles.menu}>
        {items.map((item: {id: number, status: string}, idx) => {
          return (
            <div key={idx} className={styles.menuItem}>
              <div className={styles.country}>
                <CountryFlag countryCode="US" />
                <span className="country-label">Spanish Paella</span>
              </div>
              <div className={styles.detail}>
                <NoteSticky status={item.status}/>
                <span className={styles.status}>{item.status}</span>
                <span className={styles.spliter}></span>
                <span className={styles.delay}>50min</span>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}