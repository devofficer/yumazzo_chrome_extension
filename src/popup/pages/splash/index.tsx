import { ROUTES } from "@/utils/constants/routes";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./splash.module.css";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(ROUTES.home)
    }, 100)
  }, [])

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Yumazzo</h3>
    </div>
  )
}