const pollForm = document.getElementById('poll-form');
const pollResults = document.getElementById('poll-results').getContext('2d');

let results = {
  staking: 0,
  nft: 0,
  dao: 0
};

pollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedFeature = document.querySelector('input[name="feature"]:checked').value;
  results[selectedFeature]++;
  updateChart();
});

function updateChart() {
  new Chart(pollResults, {
    type: 'bar',
    data: {
      labels: ['Staking', 'NFT', 'DAO'],
      datasets: [{
        label: 'Votes',
        data: [results.staking, results.nft, results.dao],
        backgroundColor: ['#00ff88', '#00b8ff', '#ff00ff']
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
