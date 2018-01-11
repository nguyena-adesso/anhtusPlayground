var timeFormat = 'MM/DD/YYYY HH:mm';

		function newDate(hours) {
			return moment().add(hours, 'h').toDate();
		}

		function newDateString(hours) {
			return moment().add(hours, 'hours').format(timeFormat);
		}

		function newTimestamp(hours) {
			return moment().add(hours, 'h').unix();
		}

		var color = Chart.helpers.color;
		var config = {
			type: 'line',
			data: {
				labels: [ // Date Objects
					newDate(0),
					newDate(1),
					newDate(2),
					newDate(3),
					newDate(4),
					newDate(5),
					newDate(6)
				],
				datasets: [{
					label: "Eigenerzeugung",
					backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
					borderColor: window.chartColors.red,
					fill: false,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				}, {
					label: "Gesamtverbrauch",
					backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
					borderColor: window.chartColors.blue,
					fill: false,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				},{
					label: "Verbrauch Gewerbe",
					backgroundColor: color(window.chartColors.yellow).alpha(0.5).rgbString(),
					borderColor: window.chartColors.yellow,
					fill: false,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				}, {
					label: "Verbrauch Ladeleistung",
					backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
					borderColor: window.chartColors.green,
					fill: false,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				}]
			},
			options: {
                title:{
                    text: "Chart.js Time Scale"
                },
				scales: {
					xAxes: [{
						type: "time",
						time: {
							format: timeFormat,
							// round: 'day'
							tooltipFormat: 'll HH:mm'
						},
						scaleLabel: {
							display: true,
							labelString: 'Date'
						}
					}, ],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Stromverbrauch in kw'
						}
					}]
				},
			}
		};

		window.onload = function() {
			var ctx = document.getElementById("test").getContext("2d");
			window.myLine = new Chart(ctx, config);

		};