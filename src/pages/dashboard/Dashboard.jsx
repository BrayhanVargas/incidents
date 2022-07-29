import React from "react";
import { Box, Typography } from "@mui/material";
import { ActionPlansCard } from "../../components/cards/actionplansCard/ActionPlansCard";
import { IncidentsCard } from "../../components/cards/incidentsCard/IncidentsCard";
import { RiskLevelCard } from "../../components/cards/riskLevelCard/RiskLevelCard";
import { ActionsCardsList } from "../../components/listCards/actionsCardsList/ActionsCardsList";
import styles from "./Dashboard.module.css";

const dataActionPlans = [
  {
    title: "Operacional",
    subtitle: "Riesgos identificados",
    riskValue: 15,
    riskLevel: "",
    compliance: {},
  },
  {
    title: "Actuarial",
    subtitle: "Riesgos identificados",
    riskValue: 25,
    riskLevel: "",
    compliance: {},
  },
  {
    title: "Financiero",
    subtitle: "Riesgos identificados",
    riskValue: 30,
    riskLevel: "",
    compliance: {},
  },
  {
    title: "En salud",
    subtitle: "Riesgos identificados",
    riskValue: 55,
    riskLevel: "",
    compliance: {},
  },
];

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Typography
        variant="h4"
        fontWeight="bold"
        className={styles.container_title}
      >
        Dashboard
      </Typography>
      <ActionsCardsList dataActionPlans={dataActionPlans} />
      <Box className={styles.bar_charts}>
        <RiskLevelCard />
        <IncidentsCard />
      </Box>
      <Box className={styles.container_plans}>
        <ActionPlansCard />
        <Box></Box>
      </Box>
    </div>
  );
};
