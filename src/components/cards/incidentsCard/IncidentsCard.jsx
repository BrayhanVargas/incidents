import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import styles from "./IncidentsCard.module.css";

defaults.datasets.bar.barPercentage = 0.2;
defaults.datasets.bar.borderRadius = 8;

const labels = [
  {
    name: "January",
    value: 1,
    color: "#CDCAE5",
  },
  {
    name: "February",
    value: 1,
    color: "#CDCAE5",
  },
  {
    name: "March",
    value: 2,
    color: "#CDCAE5",
  },
  {
    name: "April",
    value: 3,
    color: "#CDCAE5",
  },
  {
    name: "Mayo",
    value: 3,
    color: "#CDCAE5",
  },
  {
    name: "Junio",
    value: 3,
    color: "#CDCAE5",
  },
  {
    name: "Julio",
    value: 3,
    color: "#CDCAE5",
  },
];

const yLabels = {
  1: "Marginal",
  2: "Apreciable",
  3: "Importante",
  4: "Muy grave",
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: labels.map((label) => label.name),
  datasets: [
    {
      data: labels.map((label) => label.value),
      backgroundColor: labels.map((label) => label.color),
    },
    {
      data: [4, 4, 4, 4, 4, 4, 4],
      backgroundColor: "#e3eaf4a5",
      fill: false,
    },
  ],
};

export const IncidentsCard = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        Incidentes y eventos adversos
      </Typography>
      <Bar
      height="100%"
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value) {
                  return yLabels[value];
                },
              },
            },
          },
        }}
      />
    </Box>
  );
};
