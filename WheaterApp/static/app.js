const cityName = document.getElementById('cityName');
const searchBtn = document.querySelector('button');
const temperature = document.getElementById('temperatura');
const city = document.getElementById("city");
const wheaterImage = document.getElementById("wheaterImage");
const desc = document.getElementById('desc');
const moreData = document.getElementById('moreData');
const feelTemp = document.getElementById('feelTemp');
const preassure = document.getElementById('preassure');
const humidity = document.getElementById('humidity');


const getWeather = async (cityName) => {
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=08718eba564437ea3659773e68ee6f84&units=metric`;
    const res = await fetch(apiLink);
    return await res.json();
}

searchBtn.addEventListener('click', () => {
    getWeather(cityName.value)
        .then(res => {
            if (res.cod === '404') {
                alert('City not found !');
                cityName.value = '';
                cityName.focus();
            } else {
                city.innerText = cityName.value.toUpperCase();
                temperature.innerText = res.main.temp + 'C';
                wheaterImage.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
                wheaterImage.classList.remove('invisible');
                desc.innerText = res.weather[0].description;
                feelTemp.innerText = `${res.main.feels_like} C`;
                preassure.innerText = `${res.main.pressure} hPa`;
                humidity.innerText = `${res.main.humidity} %`;
                moreData.classList.remove('invisible');
            }
        })
})