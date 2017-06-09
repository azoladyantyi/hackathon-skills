var colors = ["Navy", "Blue", "Aqua", "Red", "Maroon", "Fuchsia", "Teal", "Olive", "Green", "Lime", "Yellow", "Orange", "Purple", "Silver", "Gray", "Black"];

var ctx = document.getElementById("myChart").getContext('2d');

var chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: _.take(colors, 7),
    }]
}

var myChart = new Chart(ctx, {
    type: 'pie',
    data: chartData,
    options: {}
});

chartData.labels.push("Yo!");
chartData.datasets[0].data.push(7)
myChart.update();
