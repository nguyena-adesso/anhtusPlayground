var myBarExtend = Chart.controllers.bar.prototype.draw;

var ctx = document.getElementById("bar-chart-vertical").getContext("2d");

var chartColors = {
  nothing:'rgb(202,199,197)',
  yellow:'rgb(236,183,49)',
  green:'rgb(142,192,108)',
  red:'rgb(127,24,27)'
};

var config = {
  type: 'bar',
  data: {
    labels: ["1", "2", "3", "4", "5","6","7","8","9","10"],
    datasets: [{
      label: "",
      backgroundColor: [
      chartColors.red,
      chartColors.red,
      chartColors.red,
      chartColors.red,
      chartColors.red,
      chartColors.red,
      chartColors.red,
      chartColors.red,
      chartColors.red,
      chartColors.red
      ],
      data: [80,57,34,84,33,100,20, ,2,29]
    }]
  },
  options: {
    legend: { display: false },
    tooltips:{
        callbacks:{
          label: function(tooltipItem, chartData){
              return tooltipItem.yLabel +'%';
          }
        }
    },

    scales:{
      yAxes:[{
        scaleLabel:  {
          display:true
          },
          gridLines : {
            display :false
          }
      }],
      xAxes:[{
        scaleLabel:   {
          display:false,
          labelString:'Slots'
          },
        ticks:{
          display:false,
          callback: function(value) {
            return "Slot " + value;
          }
        }
      }]
    },
  }
};

/*var img = new Image();
var size = 48;
Chart.helpers.extend(Chart.controllers.bar.prototype,{
    draw: function () {
    myBarExtend.apply(this, arguments);
        var scale = this.scale;
          [
            { x: 1.5, y: 50 },
            { x: 4, y: 10 }
          ].forEach(function(p) {
            ctx.drawImage(img, scale.calculateX(p.x) - size / 2, scale.calculateY(p.y) - size / 2, size, size);
          })
    }
    img.src = "../images/Urban_Energy_Logo.svg";
});*/

var barChart = new Chart(ctx, config);

var colorChangeValueOne = 50; //set this to whatever is the deciding color change value
var colorChangeValueTwo = 80;
var dataset = barChart.data.datasets[0];

for (var i = 0; i < dataset.data.length; i++) {
  if (dataset.data[i] > colorChangeValueOne) {
    dataset.backgroundColor[i] = chartColors.yellow;
  }
  if (dataset.data[i] > colorChangeValueTwo) {
    dataset.backgroundColor[i] = chartColors.green;
  }
}

barChart.update();

