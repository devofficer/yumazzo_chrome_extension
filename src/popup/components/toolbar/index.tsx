import React from "react";
import Flex from "../flex";
import ToolButton from "../toolbutton";
import CountryFlag from "../countryflag";
import { useNavigate } from "react-router-dom";

import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";

import styles from "./toolbar.module.css";
import { ROUTES } from "@/utils/constants/routes";

export default function Toolbar() {
  const navigate = useNavigate();
  const handleAddRecipe = () => {
    navigate(ROUTES.recipe);
  }

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
          <ToolButton icon={faTwitter} />
          <ToolButton icon={faTelegram} />
          <ToolButton icon={faM} />
          <ToolButton label="+Add recipe" handler={handleAddRecipe} />
        </Flex>
      </Flex>
    </div>
  )
}