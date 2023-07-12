import React from "react";

import styles from "./details.module.css";
import Flex from "../flex";
import TextItem from "../textitem";

export default function Details() {
  return (
    <div className={styles.container}>
      <Flex gap={10}>
        <TextItem label="Protein" content="Jumbo Shrimp"/>
        <TextItem label="Spice Level" content="Hot" labelType="hot"/>
        <TextItem label="Protein" content="Jumbo Shrimp" labelType="gradient"/>
        <TextItem label="Protein" content="Jumbo Shrimp"/>
        <TextItem label="Protein" content="Jumbo Shrimp"/>
        <TextItem label="Protein" content="Jumbo Shrimp"/>
        <TextItem label="Protein" content="Jumbo Shrimp"/>
        <TextItem label="Protein" content="Jumbo Shrimp"/>
      </Flex>
    </div>
  )
}