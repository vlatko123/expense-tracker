import React from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";

const Overviews = ({ expenses, categories }) => {
  const labels = [];
  const data = [];

  if (expenses) {
    categories.map((category) => {
      labels.push(category.name);

      const totalAmount = expenses.reduce((total, entry) => {
        if (entry.category === category.name) {
          return total + parseInt(entry.amount);
        } else {
          return total;
        }
      }, 0);
      data.push(totalAmount);
    });
  }

  const chartData = {
    labels: labels || "",
    datasets: [
      {
        label: "Amount",
        backgroundColor: "rgba(275,143, 122,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: data || [],
      },
    ],
  };

  return (
    <div>
      {expenses && <Bar data={chartData} width={100} height={40} />}
      {/* {!expenses && (
        <h2>
          There is no entries to display, please go to
          <Link to="/home/"> Home page</Link> page
        </h2>
      )} */}
    </div>
  );
};

export default Overviews;
