const API_KEY = 'd9cde8164e4a7d8682bfe07f4b1c1fd7'
const currentAPI_KEY = '36c7493f4ad84cfc530906c65c7a4f23'

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')
const forecastContainer = document.querySelector('#forecast-container')
const currentforecastContainer = document.querySelector('#currentforecast-container')



searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    
    const city = searchInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${currentAPI_KEY}`)
    .then(res => res.json())
    .then(currentData => {
        currentforecastContainer.innerHTML = ''
        console.log(currentData)
            const element = currentData;
            const currentforecastCard = document.createElement('div');
            currentforecastCard.classList.add('currentforecast-card');
            console.log(currentData)

            //icon
            const iconUrl = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
            const iconEl = document.createElement('img');
            iconEl.src = iconUrl; 
            currentforecastCard.appendChild(iconEl);
            
            // temp
            const temp = element.main.temp;
            const tempEl = document.createElement('p');
            tempEl.textContent = `Temperature: ${parseInt(temp)}°F`;
            currentforecastCard.appendChild(tempEl);

            // wind speed
            const wind = element.wind.speed;
            const windEl = document.createElement('p');
            windEl.textContent = `Wind Speed: ${parseInt(wind)} MPH`;
            currentforecastCard.appendChild(windEl);


            //description
            const description = element.weather[0].main;
            const descriptionEl = document.createElement('p');
            descriptionEl.textContent = `Description of weather: ${description}`;
            currentforecastCard.appendChild(descriptionEl);

            currentforecastContainer.appendChild(currentforecastCard)
        
    });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        forecastContainer.innerHTML = ''
        console.log(data.list)
        for (let index = 0; index < data.list.length; index += 8) {
            const element = data.list[index];
            const forecastCard = document.createElement('div');
            forecastCard.classList.add('forecast-card');

            // Date
            let date = element.dt;
            let formatDate = dayjs.unix(date).format('MM/DD/YYYY')
            const dateEl = document.createElement('p');
            dateEl.textContent = `Date: ${formatDate}`;
            forecastCard.appendChild(dateEl);

            //icon
            const iconUrl = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
            const iconEl = document.createElement('img');
            iconEl.src = iconUrl; 
            forecastCard.appendChild(iconEl);

            // temp
            const temp = element.main.temp;
            const tempEl = document.createElement('p');
            tempEl.textContent = `Temperature: ${parseInt(temp)}°F`;
            forecastCard.appendChild(tempEl);

            // humidity         
            const humidity = element.main.humidity;
            const humidityEl = document.createElement('p');
            humidityEl.textContent = `Humidity: ${humidity}%`;
            forecastCard.appendChild(humidityEl);

            // wind speed
            const wind = element.wind.speed;
            const windEl = document.createElement('p');
            windEl.textContent = `Wind Speed: ${parseInt(wind)} MPH`;
            forecastCard.appendChild(windEl);

            //description
            const description = element.weather[0].description;
            const descriptionEl = document.createElement('p');
            descriptionEl.textContent = `Description of weather: ${description}`;
            forecastCard.appendChild(descriptionEl);

            forecastContainer.appendChild(forecastCard)
        }
    })
    let data = document.querySelector('#search-input').value;
        const upper = data.charAt(0).toUpperCase() + data.slice(1);
        localStorage.setItem("cities", upper);
        

    let cities = localStorage.getItem("cities");
    let cityList = document.querySelector("#city-list");
    
    if (cities) {
      let cityArray = cities.split(",");
      cityArray.forEach(city => {
        let button = document.createElement("button");
        button.textContent = city;
        cityList.appendChild(button);
      });
    }
})


var todaysDate = dayjs();
$('#today').text(todaysDate.format('dddd MMMM D, YYYY'));