import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./ActionPlansCard.module.css";

export const ActionPlansCard = () => {
  return (
    <Box className={styles.plans}>
      <Typography variant="h6" className={styles.title}>
        Cumplimiento planes de accion
      </Typography>
      <Typography className={styles.subtitle}>Operacional</Typography>
      <Typography className={styles.subtitle}>Actuarial</Typography>
      <Typography className={styles.subtitle}>Financiero</Typography>
      <Typography className={styles.subtitle}>En salud</Typography>
    </Box>
  );
};
