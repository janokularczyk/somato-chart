export var data = [{}];

export var somatoChart = Highcharts.chart("somatoChart", {
  chart: {
    type: "scatter",
    renderTo: "somatoChart",
    plotBackgroundImage: "/img/chart.svg",
  },
  title: {
    text: "Athletes by body type",
    align: "left",
  },
  subtitle: {
    text: "Source: Data provided by User",
    align: "left",
  },
  xAxis: {
    title: {
      text: "ectomorphy - endomorphy",
    },
    min: -8,
    max: 8,
    gridLineWidth: 0,
    tickInterval: 1,
    tickLength: 0,
    minorTickLength: 0,
    lineColor: "#ccc",
    lineWidth: 1,
  },
  yAxis: {
    title: {
      text: "2 * mesomorphy - (endomorphy + ectomorphy)",
    },
    min: -10,
    max: 18,
    gridLineWidth: 0,
    tickInterval: 2,
    tickLength: 0,
    minorTickLength: 0,
    lineColor: "#ccc",
    lineWidth: 1,
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    scatter: {
      marker: {
        states: {
          hover: {
            enabled: true,
            lineColor: "#646464",
          },
        },
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
    },
  },
  tooltip: {
    formatter: function () {
      return (
        "<b>" + this.point.name + "</b><br/>x: " + this.x + "<br/>y: " + this.y
      );
    },
  },
  colors: ["#646464"],
  series: data,
});
