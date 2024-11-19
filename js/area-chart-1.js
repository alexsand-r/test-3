//================ Chart area ===================================

function chartOptions(name, data) {
  const labelDate = splitDays(90, data.length - 1);

  return {
    chart: {
      height: "140px",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      // offsetY: -30,
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        // Добавляем функцию форматирования для отображения знака доллара перед значениями
        formatter: function (value) {
          return "$" + value;
        },
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
        name: name,
        data: data,
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: labelDate,
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
}

let cache = {};

function splitDays(totalDays, n) {
  // if (n <= 0) {
  //     return "Число частей должно быть больше 0";
  // }

  if (cache[n]) {
    return cache[n];
  }

  let daysPerPart = totalDays / n;
  let cumulativeDays = 0;
  let parts = [];
  //parts.push("0");

  for (let i = 0; i < n; i++) {
    cumulativeDays = Math.ceil((i + 1) * daysPerPart);
    parts.push(cumulativeDays + " Days ago");
  }

  cache[n] = parts;

  return parts;
}

const minChartBlock = document.getElementById("area-chart1");
const minChatData = minChartBlock.getAttribute("data-chart");
if (minChatData) {
  const minChart = new ApexCharts(
    minChartBlock,
    chartOptions("Min Final Bids", JSON.parse(minChatData))
  );
  minChart.render();
}

const maxChartBlock = document.getElementById("area-chart3");
const maxChatData = maxChartBlock.getAttribute("data-chart");
if (maxChatData) {
  const maxChart = new ApexCharts(
    maxChartBlock,
    chartOptions("Max Final Bids", JSON.parse(maxChatData))
  );
  maxChart.render();
}

const avgChartBlock = document.getElementById("area-chart2");
const avgChatData = avgChartBlock.getAttribute("data-chart");
if (avgChatData) {
  // Преобразуем данные в целые числа
  const avgDataRounded = JSON.parse(avgChatData).map((value) =>
    Math.round(value)
  );

  const avgChart = new ApexCharts(
    avgChartBlock,
    chartOptions("Avg Final Bids", avgDataRounded)
  );
  avgChart.render();
}
