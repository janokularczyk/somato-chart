import { Athlete } from "./athlete.js";
import { somatoChart, data } from "./somatoChart.js";

document.getElementById("add").onclick = function () {
  var athlete = new Athlete(
    document.getElementById("athleteName").value,
    document.getElementById("endo").value,
    document.getElementById("meso").value,
    document.getElementById("ecto").value
  );

  var seriesSymbol = document.getElementById("seriesSymbol").value;
  var seriesColor = document.getElementById("seriesColor").value;

  data.push({
    x: athlete.xValue,
    y: athlete.yValue,
    name: athlete.athleteName,
    marker: {
      symbol: seriesSymbol,
      fillColor: seriesColor,
    },
  });

  var elements = document.getElementsByTagName("input");
  for (var i = 0; i < elements.length; i++) {
    elements[i].value = "";
  }
  somatoChart.addSeries({ data: data });
};

document.getElementById("undo").onclick = function () {
  data.pop();

  somatoChart.series[somatoChart.series.length - 1].remove();
};
