import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../../../context/globalContext";
import { dateFormat } from "../../../utils/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function FinanceChart() {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        borderColor: "green",
        tension: 0.5,
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "red",
        borderColor: "red",
        tension: 0.5,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "gray",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "gray",
          fontSize: window.innerWidth < 768 ? "5px" : 12,
        },
      },
      y: {
        ticks: {
          color: "gray",
          fontSize: window.innerWidth < 768 ? "5px" : 12,
        },
      },
    },
  };

  return (
    <div
      className="relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[43vh] dark:bg-gray-800"
      style={{ width: "100%", height: "100%" }}
    >
      <Line type="line" data={data} options={options} />
    </div>
  );
}

export default FinanceChart;

// const ChartStyled = styled.div`
//   background: #fcf6f9;
//   border: 2px solid #ffffff;
//   box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//   padding: 1rem;
//   border-radius: 20px;
//   height: 100%;
// `;
