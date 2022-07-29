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
import styles from "./RiskLevelCard.module.css";
import { Box, Typography } from "@mui/material";

defaults.datasets.bar.barPercentage = 0.2;
defaults.datasets.bar.borderRadius = 8;

const labels = [
  {
    name: "January",
    value: 1,
  },
  {
    name: "February",
    value: 1,
  },
  {
    name: "March",
    value: 2,
  },
  {
    name: "April",
    value: 3,
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
      backgroundColor: "#CDCAE5",
    },
    {
      data: [4, 4, 4, 4],
      backgroundColor: "#e3eaf47b",
      fill: false,
    },
  ],
};

export const RiskLevelCard = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        Nivel de riesgo
      </Typography>
      <Bar
        height="100px"
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
