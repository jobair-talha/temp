
const apiKey = `db7caeaa89e26c3c52842445355816ea`;
const getTemp = () => {
    const cityName = document.getElementById('city-name')
    const city = cityName.value;
    cityName.value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => setTemp(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const setTemp = temperature => {
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)
    const iconUrl = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon')
    weatherIcon.setAttribute('src',iconUrl)
    console.log(temperature);

}

document.getElementById('search-temp').addEventListener('click', getTemp)