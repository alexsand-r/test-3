//*----------
//import ApexCharts from "apexcharts/dist/apexcharts.area";

const options1 = {
  chart: {
    height: "60px",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0,
    },
  },
  series: [
    {
      name: "New users",
      data: [1000, 1100, 900, 1400, 1300, 1200, 700, 1100, 1200, 1400],
      color: "#1A56DB",
    },
  ],
  xaxis: {
    categories: [
      "90 Days ago",
      "80 Days ago",
      "70 Days ago",
      "60 Days ago",
      "50 Days ago",
      "40 Days ago",
      "30 Days ago",
      "20 Days ago",
      "10 Days ago",
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

const options2 = {
  ...options1,
  series: [
    {
      name: "New users",
      data: [800, 900, 1100, 1000, 1200, 700, 1300, 1400, 1800, 2000],
      color: "#1A56DB",
    },
  ],
};

const options3 = {
  ...options1,
  series: [
    {
      name: "New users",
      data: [2000, 3000, 1500, 5000, 8000, 3500, 5000, 3500, 4500, 8000, 7500],
      color: "#1A56DB",
    },
  ],
};

// Инициализация первого графика
if (
  document.getElementById("area-chart1") &&
  typeof ApexCharts !== "undefined"
) {
  const chart1 = new ApexCharts(
    document.getElementById("area-chart1"),
    options1
  );
  chart1.render();
}

// Инициализация второго графика
if (
  document.getElementById("area-chart2") &&
  typeof ApexCharts !== "undefined"
) {
  const chart2 = new ApexCharts(
    document.getElementById("area-chart2"),
    options2
  );
  chart2.render();
}

// Инициализация третьего графика
if (
  document.getElementById("area-chart3") &&
  typeof ApexCharts !== "undefined"
) {
  const chart3 = new ApexCharts(
    document.getElementById("area-chart3"),
    options3
  );
  chart3.render();
}
