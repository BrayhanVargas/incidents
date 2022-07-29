import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { IncidentsTable } from "../../components/tables/incidentsTable/IncidentsTable";
import styles from "./Incidents.module.css";

const data = [
  {
    id: 1,
    name: "Luisa Perez",
    position: "Auxiliar",
    campus: "test",
    patient: "Ana Gutierrez",
    date: "test",
    description: "testtesttestsdsddsdsdsdsdsdsdsdssdstesttesttt",
  },
  {
    id: 2,
    name: "Luisa Perez",
    position: "Auxiliar",
    campus: "test",
    patient: "Fabian Ortiz",
    date: "test",
    description: "tetesttesttestst",
  },
  {
    id: 3,
    name: "Luisa Perez",
    position: "Auxiliar",
    campus: "test",
    patient: "Fabian Ortiz",
    date: "test",
    description: "tetesttesttestst",
  },
];
export const Inicidents = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.container_title}>
        <Typography variant="h4" fontWeight="bold" className={styles.title}>
          Inicidentes
        </Typography>
        <Box className={styles.new_incident}>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            primary="Nuevo incidente"
            className={styles.new_incident_text}
          />
        </Box>
      </Box>
      <IncidentsTable data={data} />
    </Box>
  );
};
