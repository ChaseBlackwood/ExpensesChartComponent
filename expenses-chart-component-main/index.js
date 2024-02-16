var jsonData = [
    {"day": "mon", "amount": 17.45},
    {"day": "tue", "amount": 34.91},
    {"day": "wed", "amount": 52.36},
    {"day": "thu", "amount": 31.07},
    {"day": "fri", "amount": 23.39},
    {"day": "sat", "amount": 43.28},
    {"day": "sun", "amount": 25.48}
  ];

  var days = jsonData.map(function(entry) { return entry.day; });
  var amounts = jsonData.map(function(entry) { return entry.amount; });

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: days, // X-axis labels
      datasets: [{
          label: 'Amount',
          data: amounts, // Y-axis data
          backgroundColor: [
              '#EC755D',
              '#EC755D',
              '#76B5BC',
              '#EC755D',
              '#EC755D',
              '#EC755D',
              '#EC755D'
          ],
          borderRadius: 3,
          hoverBackgroundColor: [
            '#FF9B86',
            '#FF9B86',
            '#B4E0E5',
            '#FF9B86',
            '#FF9B86',
            '#FF9B86',
            '#FF9B86',
          ]
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                callback: function(value, index, values) {
                  return '$' + value.toFixed(2);
              }
          }
      }
  },
  plugins: {
      tooltip: {
          callbacks: {
              label: function(context) {
                  // Assuming 'Amount' is the label for the dataset
                  let label = context.dataset.label || '';
                  if (label) {
                      label += ': $';
                  }
                  if (context.parsed.y !== null) {
                      label += context.parsed.y.toFixed(2);
                  }
                  return label;
              }
          }
      }
  }
}});
