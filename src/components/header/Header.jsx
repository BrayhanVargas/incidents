import React from "react";
import styles from "./Header.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";

export const Header = () => {
  return (
    <div className={styles.container}>
      <IconButton>
        <NotificationsIcon className={styles.notify_icon} />
      </IconButton>
      <IconButton>
        <AccountCircleIcon className={styles.icon} />
      </IconButton>
    </div>
  );
};
