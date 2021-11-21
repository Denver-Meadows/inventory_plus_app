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
            ["Q1", 1000, 400],
            ["Q2", 1170, 460],
            ["Q3", 660, 1120],
            ["Q4", 1030, 540],
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

/* <Chart
className="inventory-chart"
chartType="LineChart"
loader={<div>Loading Chart</div>}
data={[
  ["x", "sales", "purchase"],
  [0, 20, 10],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]}
options={{
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  },
}}
rootProps={{ "data-testid": "2" }}
/> */
