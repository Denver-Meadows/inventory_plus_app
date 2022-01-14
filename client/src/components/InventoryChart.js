import { Chart } from "react-google-charts";

function InventoryChart() {
  return (
    <main className="dashboard-content-inventory-chart">
      <div className="chart-container">
        <Chart
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Year", "Sales", "Expenses"],
            ["Q1", 1000, 550],
            ["Q2", 1170, 760],
            ["Q3", 900, 750],
            ["Q4", 1030, 620],
          ]}
          options={{
            title: "Company Performance",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: "60%", height: "70%" },
            // lineWidth: 25
          }}
        />
      </div>
    </main>
  );
}

export default InventoryChart;
