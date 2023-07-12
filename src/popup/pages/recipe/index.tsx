import React from "react";
import ToolButton from "@/popup/components/toolbutton";
import TextField from "@/popup/components/textfield";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/utils/constants/routes";

import styles from "./recipe.module.css";
import Flex from "@/popup/components/flex";
import TextArea from "@/popup/components/textarea";
import Button from "@/popup/components/button";

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
        <form>
          <Flex gap={24} dir="column">
            <Flex gap={10} justifyContent="space-between">
              <TextField name="name" label="name"/>
              <TextField name="origin" label="origin"/>
            </Flex>
            <TextArea 
              name="description" 
              label="description" 
              maxLength={200}
              placeholder="Describe your recipe..."
            />
            <Flex gap={10} justifyContent="space-between">
              <TextField name="difficulty" label="difficulty"/>
              <TextField name="protein" label="protein"/>
            </Flex>
            <Flex gap={10} justifyContent="space-between">
              <TextField name="produce" label="produce"/>
              <TextField name="spice" label="spice"/>
            </Flex>
            <Flex gap={10} justifyContent="space-between">
              <TextField name="cooking_oil" label="Cooking Oil?"/>
              <TextField name="volume" label="volume" unit="gram"/>
            </Flex>
            <Flex gap={10} justifyContent="space-between">
              <TextField name="serves" label="serves" unit="people"/>
              <TextField name="authenticity" label="authenticity"/>
            </Flex>
            <TextField name="stock" label="stock" size="full"/>
            <Button label="Add Recipe" handler={() => alert("abc")}/>
          </Flex>
        </form>
      </div>
    </div>
  )
}