"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchUser } from "@/utils/fetchUser";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Analytics() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    async function loadChartData() {
      const users = await fetchUser();

      const titleCounts = users.reduce((acc, user) => {
        const title = user.company.title ;
        acc[title] = (acc[title] || 0) + 1;
        return acc;
      }, {});

      
      console.log(titleCounts);

      const labels = Object.keys(titleCounts).map(
        (title) => `${title} (${titleCounts[title]})`
      );
      const counts = Object.values(titleCounts);

      setChartData({
        labels,
        datasets: [
          {
            label: "Users per department",
            data: counts,
            backgroundColor: "rgba(255, 99, 132, 0.6)",
          },
        ],
      });
    }

    loadChartData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users per Company Title</h1>
      {chartData.labels.length > 0 ? <Bar data={chartData} /> : <p>Loading chart data...</p>}
    </div>
  );
}
