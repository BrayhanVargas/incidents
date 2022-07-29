import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { NavBar } from "../components/navbar/NavBar";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Inicidents } from "../pages/incidents/Inicidents";
import styles from "./MyRoutes.module.css";

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.container}>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incidentes" element={<Inicidents />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
