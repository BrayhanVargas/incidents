import React from "react";
import styles from "../navbar/NavBar.module.css";
import { IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LogoutIcon from "@mui/icons-material/Logout";
import StreamIcon from "@mui/icons-material/Stream";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <IconButton>
        <StreamIcon className={styles.navbar_logo} />
      </IconButton>
      <IconButton
        className={styles.navbar_container}
        onClick={() => navigate("/dashboard")}
      >
        <SettingsIcon className={styles.icon} />
        <Typography className={styles.icon_text}>Dashboard</Typography>
      </IconButton>
      <IconButton
        className={styles.navbar_container}
        onClick={() => navigate("/incidentes")}
      >
        <MedicalServicesIcon className={styles.icon} />
        <Typography className={styles.icon_text}>Incidentes</Typography>
      </IconButton>
      <IconButton className={styles.navbar_container_exit}>
        <LogoutIcon className={styles.icon} />
      </IconButton>
    </div>
  );
};
