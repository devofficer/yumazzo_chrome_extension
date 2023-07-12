import React from "react";
import Flex from "../flex";
import ToolButton from "../toolbutton";
import CountryFlag from "../countryflag";

import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";

import styles from "./toolbar.module.css";

export default function Toolbar() {
  return (
    <div className={styles.wrapper}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex gap={10} alignItems="center">
          <CountryFlag countryCode="US"/>
          <span className="country-label">Spanish Paella</span>
        </Flex>
        
        <Flex gap={5} alignItems="center">
          <ToolButton icon={faTwitter} handler={() => {}} />
          <ToolButton icon={faTelegram} handler={() => {}} />
          <ToolButton icon={faM} handler={() => {}} />
          <ToolButton label="+Add recipe" handler={() => {}} />
        </Flex>
      </Flex>
    </div>
  )
}