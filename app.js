const apiKey = 'ceeadc98eb3f05ac32bbe9474af3787d';

const form = document.getElementById('weather-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city-input').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            document.getElementById('city-name').innerText = data.name;
            document.getElementById('city-country').innerText = data.sys.country;
            document.getElementById('weather-description').innerText = data.weather[0].description;
            document.getElementById('temperature').innerText = `${data.main.temp}°C`;
        } else {
            alert('Error fetching weather data');
        }
    };

    xhr.onerror = function() {
        alert('Error fetching weather data');
    };

    xhr.send();
});
