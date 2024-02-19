$(function () {
  $("#start_date").datepicker();
  $("#end_date").datepicker();
});

// ? Pie chat

var options = {
  series: [44, 55, 13],
  chart: {
    // width: 450,
    type: "pie",
  },
  legend: {
    position: "top",
  },
  labels: ["Deliverd", "Undelivered", "Failed/Expired"],
  responsive: [
    {
      breakpoint: 2560,
      options: {
        chart: {
          width: 450,
        },
      },
      breakpoint: 1699,
      options: {
        chart: {
          width: 300,
        },
      },
      breakpoint: 991,
      options: {
        chart: {
          width: 200,
        },
      },
      breakpoint: 767,
      options: {
        chart: {
          width: 300,
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
