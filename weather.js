


let place = 'San Diego';



async function directGeo(){
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=${key}`);
    let city = await response.json();
    let lat = city[0].lat;
    let lon = city[0].lon;
    let coordinates = [lat,lon];
    return coordinates;
};

async function hitAPI(){
    let response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${x}&lon=${y}&exclude={alerts}&appid=${key}`);
    let answer = await response.json();
    console.log(answer);

};

hitAPI(directGeo());