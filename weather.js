

const key = 'e558da8b51128d17caf06f9526d53b74';
let place = 'San Diego';

async function getCoordinates(){
    let locationResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=${key}`);
    let city = await locationResponse.json();
    let lat = city[0].lat;
    let lon = city[0].lon;
    const coordinates = [lat,lon];
    return coordinates;
};


async function filterToday(){
    let location = await getCoordinates();
    let response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${key}&units=imperial`);
    let data = await response.json();
    
    const todayWeatherObject = {
        temperature:  data.main.temp,
        city: data.name,
        high: data.main.temp_max,
        low: data.main.temp_min,
        status: data.weather[0].main,
        statusDescription: data.weather[0].description,
    };
    console.log(todayWeatherObject);
};

filterToday();