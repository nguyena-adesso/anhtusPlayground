  var myLineExtend = Chart.controllers.line.prototype.draw;

  var ctx = document.getElementById("canvas").getContext("2d");

  var config = {
    type:'line',
    data:{
    labels: [00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    datasets: [{
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        label: "Eigenerzeugung",
        borderColor: "#00A468",
        backgroundColor:"#00A468",
        fill: false
      }, {
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        label: "Gesamtverbrauch",
        borderColor: "#004B79",
        backgroundColor:"#004B79",
        fill: false
      }, {
        data: [86,214,80,139,107,42,100,21,483,28,280,194.5,200,223,343,343,90,254,75,500,100,344,383,200],
        label: "Verbrauch Ladeleistung",
        borderColor: "#56A0D3",
        backgroundColor:"#56A0D3",
        fill: false
      }, {
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        label: "Verbrauch Gewerbe",
        borderColor: "#C4DFF6",
        backgroundColor:"#C4DFF6",
        fill: false
      }
      ],
      datasetFill: false,
      lineAtIndex:2
    },
    options: {
        scales:{
            xAxes:[{
                scaleLabel: {
                    display: true,
                    labelString: 'Stunden'
                }
            },],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Stromverbrauch in kw'
                }
            }]
        },
      }
  };

Chart.helpers.extend(Chart.controllers.line.prototype, {
    draw: function () {

      myLineExtend.apply(this, arguments);

      var chart = this.chart;
      var ctx = chart.chart.ctx;

      var index = chart.config.data.lineAtIndex;
      var xaxis = chart.scales['x-axis-0'];
      var yaxis = chart.scales['y-axis-0'];

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xaxis.getPixelForValue(undefined, index), yaxis.top + 24);
      ctx.strokeStyle = '#ff0000';
      ctx.lineTo(xaxis.getPixelForValue(undefined, index), yaxis.bottom);
      ctx.stroke();
      ctx.restore();

      ctx.textAlign = 'center';
      ctx.fillText("now", xaxis.getPixelForValue(undefined, index), yaxis.top + 12);

    }
});
var lineChart = new Chart(ctx, config);