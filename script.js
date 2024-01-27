
let cityName=document.getElementById('cityName');
let searchIcon=document.getElementById('searchIcon');
let tempValue=document.getElementById('tempValue');
let tempPlace=document.getElementById('tempPlace');
let humidityValue=document.getElementById('humidityValue');
let windValue=document.getElementById('windValue');
let weatherImage=document.getElementById('weatherImage')

const apiKey='fb897f8961c15daa0c50812a6ce4180c';
const apiURL='https://api.openweathermap.org/data/2.5/weather';
const units='metric';

searchIcon.addEventListener('click',()=>{
    const city=cityName.value;
    const url=`${apiURL}?q=${city}&units=${units}&appid=${apiKey}`;

    //calling api
   fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error(`HTTP error status:${response.status}`)
        }
        return response.json();
       })
       .then((data)=>{
        tempValue.innerHTML=data.main.temp;
        tempPlace.innerHTML=data.name;
        humidityValue.innerHTML=data.main.humidity;
        windValue.innerHTML=data.wind.speed;
        let weatherCondition=data.weather[0].main
        checkWeatherLogo(weatherCondition);
       })
       .catch((err)=>{
        console.error('fetch error: ',err)
       })
})

//checking logo for suitable weather
function checkWeatherLogo(weather){
    switch(weather){
        case 'Clear':
            weatherImage.src='images/clear.png';
            break;
        case 'Clouds':
            weatherImage.src='images/clouds.png';
            break;
        case 'Drizzle':
            weatherImage.src='images/drizzle.png';
            break;
        case 'Mist':
            weatherImage.src='images/mist.png';
            break;
        case 'Rain':
            weatherImage.src='images/rain.png'
            break;
        default:
            weatherImage.src='images/snow.png';
            break;
    }
}
