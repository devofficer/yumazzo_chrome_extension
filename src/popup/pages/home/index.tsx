import React, { FormEvent, useRef } from "react";

import ToolButton from "@/popup/components/toolbutton";

import styles from "./home.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Flex from "@/popup/components/flex";
import Toolbar from "@/popup/components/toolbar";

export default function Home() {

  const formRef = useRef(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formRef.current);
  }

  const handleAddRecipe = () => {

  }

  return (
    <div className={styles.container}>
      <Toolbar/>
    </div>
  )
}