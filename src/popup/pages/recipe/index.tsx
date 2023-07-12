import React from "react";
import ToolButton from "@/popup/components/toolbutton";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/utils/constants/routes";

import styles from "./recipe.module.css";

export default function Recipe() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTES.home);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ToolButton transparent icon={faChevronLeft} handler={handleBack} />
        <span className={styles.title}>Add new recipe</span>
      </div>
      <div className={styles.content}>

      </div>
    </div>
  )
}