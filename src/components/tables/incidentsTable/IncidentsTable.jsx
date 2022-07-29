import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./IncidentsTable.module.css";

export const IncidentsTable = ({ data }) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.filter}>
        <Box>filter</Box>
      </Box>
      <Box>
        <Box className={styles.headers}>
          <Typography>Nombre reportante</Typography>
          <Typography>Cargo</Typography>
          <Typography>Sede</Typography>
          <Typography>Paciente</Typography>
          <Typography>Fecha incidente</Typography>
          <Typography>Descripción incidente</Typography>
        </Box>
        <Box>
          {data.map((incident) => {
            return (
              <Box className={styles.incidents} key={incident.id}>
                <Typography className={styles.incident}>
                  {incident.name}
                </Typography>
                <Typography className={styles.incident}>
                  {incident.position}
                </Typography>
                <Typography className={styles.incident}>
                  {incident.campus}
                </Typography>
                <Typography className={styles.incident}>
                  {incident.patient}
                </Typography>
                <Typography className={styles.incident}>
                  {incident.date}
                </Typography>
                <Typography className={styles.incident}>
                  {incident.description}
                </Typography>
                <Box className={styles.icons}>.</Box>
                <Box className={styles.icons}>.</Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
