import { Box } from "@mui/material";
import React from "react";
import { ActionsCard } from "../../cards/actionsCard/ActionsCard";
import styles from "./ActionsCardsList.module.css";

export const ActionsCardsList = ({ dataActionPlans }) => {
  return (
    <Box className={styles.container}>
      {dataActionPlans.map((actionPlan) => (
        <ActionsCard actionPlan={actionPlan} />
      ))}
    </Box>
  );
};
