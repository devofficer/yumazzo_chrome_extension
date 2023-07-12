import React from "react";
import { FlexPropsType } from "@/utils/types/flex";

export default function Flex({
  dir = "row", 
  justifyContent = "flex-start",
  alignItems = "flex-start",
  gap = 0,
  children
}:FlexPropsType) {
  return <div 
    style={{
      display: "flex",
      gap: `${gap}px`,
      flexDirection: dir, 
      justifyContent: justifyContent,
      alignItems: alignItems,
    }}
  >
    {children}
  </div>
}