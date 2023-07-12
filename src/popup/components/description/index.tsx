import React from "react";

import styles from "./description.module.css";
import { DescriptionPropsType } from "@/utils/types/description";
import Flex from "../flex";

export default function Description({difficulty, description}: DescriptionPropsType) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Flex gap={10} alignItems="center">
          <img alt="earth" src="/earth.png"/>
          <span className={styles.title}>Difficulty: {difficulty}</span>
        </Flex>
        <div className={styles.content}>
          {description}
        </div>
      </div>
    </div>
  )
}