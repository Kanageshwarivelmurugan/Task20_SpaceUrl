document.addEventListener('DOMContentLoaded', () => {

    const weatherApiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const spacexUrl = 'https://api.spacexdata.com/v4/launches';

    function fetchSpaceX() {
        fetch(spacexUrl)
            .then(response => response.json())
            .then(data => {
                const spacexDataContainer = document.getElementById('spacex-data');
                spacexDataContainer.innerHTML = data.map(launch => `
                    <div class="launch-item mb-3">
                        <h4>${launch.name}</h4>
                        <p>Date: ${new Date(launch.date_utc).toLocaleDateString()}</p>
                        <p>Details: ${launch.details ? launch.details : 'No details available.'}</p>
                    </div>
                `).join('');
            })
            .catch(error => {
                console.error('Error fetching SpaceX data:', error);
                document.getElementById('spacex-data').innerHTML = '<p>Failed to load SpaceX data.</p>';
            });
    }


    fetchSpaceX();
});
