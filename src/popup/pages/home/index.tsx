import React, { FormEvent, useRef } from "react";

import ToolButton from "@/popup/components/toolbutton";

import styles from "./home.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Flex from "@/popup/components/flex";
import Toolbar from "@/popup/components/toolbar";
import Description from "@/popup/components/description";
import Details from "@/popup/components/details";
import SearchBox from "@/popup/components/searchbox";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants/routes";

export default function Home() {
  

  return (
    <div className={styles.container}>
      <Flex dir="column" gap={24}>
        <SearchBox />
        <Toolbar />
        <Description difficulty="Medium" description="Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area." />
        <Details />
      </Flex>
    </div>
  )
}