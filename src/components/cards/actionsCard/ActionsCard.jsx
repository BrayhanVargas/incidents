import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./ActionsCard.module.css";

export const ActionsCard = ({ actionPlan }) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.container_text}>
        <Typography className={styles.container_title} fontWeight="bold">
          {actionPlan.title}
        </Typography>
        <Typography className={styles.container_subtitle}>
          {actionPlan.subtitle}
        </Typography>
      </Box>
      <Typography
        variant="h4"
        className={styles.container_value}
        fontWeight="bold"
      >
        {actionPlan.riskValue}
      </Typography>
    </Box>
  );
};
