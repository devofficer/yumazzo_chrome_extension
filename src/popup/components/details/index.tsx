import React from "react";

import styles from "./details.module.css";
import Flex from "../flex";
import TextItem from "../textitem";

export default function Details() {
  return (
    <div className={styles.container}>
      <Flex gap={10}>
        <TextItem label="Protein" content="Jumbo Shrimp"/>
        <TextItem label="Produce" content="Hot" labelType="hot"/>
        <TextItem label="Spices" content="Saffron" labelType="gradient"/>
        <TextItem label="Cooking Oil" content="Spanish Olive Oil" labelType="gradient"/>
        <TextItem label="Volume/Weight" content="700g"/>
        <TextItem label="Serves" content="4"/>
        <TextItem label="Authenticity" content="Unverified" labelType="gradient"/>
        <TextItem label="Stock" content="Chicken" labelType="gradient"/>
      </Flex>
    </div>
  )
}