(async () => {
  let response = await axios.get("https://api.covid19api.com/summary");
  loadData(response.data);
})();

function loadData(data) {
  loadKPI(data);
  loadPieChart(data);
  loadBarrChart(data);
}

function loadKPI(data) {
  document.getElementById("confirmed").innerHTML =
    data.Global.TotalConfirmed.toLocaleString("PT");
  document.getElementById("death").innerHTML =
    data.Global.TotalDeaths.toLocaleString("PT");
  //A API não está registrando total de recuperados. Em todas as consultas, o resultado será "0".
  // document.getElementById("recovered").innerHTML = data.Global.RecoveredConfirmed.toLocaleString("PT");
  //Para obter o número estimado de recuperados, realizei a subtração do total de casos pelo total de óbitos.
  let estimatedRecover = data.Global.TotalConfirmed - data.Global.TotalDeaths;
  document.getElementById("recovered").innerHTML =
    estimatedRecover.toLocaleString("PT");
}

function loadPieChart(data) {
  const chart = document.getElementById("pizza").getContext("2d");

  let chartData = [
    data.Global.NewConfirmed,
    data.Global.NewDeaths,
    //data.Global.NewRecovered,
    data.Global.NewConfirmed - data.Global.NewDeaths,
  ];

  const pieChart = new Chart(chart, {
    type: "pie",
    data: {
      labels: ["Confirmados", "Mortes", "Recuperados"],
      datasets: [
        {
          label: chartData,
          data: chartData,
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Distribuição de novos casos",
          font: {
            size: 20,
          },
        },
      },
    },
  });

  return pieChart;
}

function loadBarrChart(data) {
  const chart = document.getElementById("barras").getContext("2d");

  let top10Countries = _.orderBy(
    data.Countries,
    ["TotalDeaths", "Country"],
    ["desc", "asc"]
  ).slice(0, 10);

  let mapCountries = _.map(top10Countries, "Country");
  let mapDeaths = _.map(top10Countries, "TotalDeaths");

  const barChart = new Chart(chart, {
    type: "bar",
    data: {
      labels: mapCountries,
      datasets: [
        {
          label: "Total de mortes",
          data: mapDeaths,
          backgroundColor: ["rgba(221, 26, 55)"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "TOP 10: Número total de mortes por país",
          font: {
            size: 20,
          },
        },
      },
    },
  });

  return barChart;
}
