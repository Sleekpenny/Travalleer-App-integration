
let eachMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let eachDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let date = document.querySelector(".date")
let time = document.querySelector(".time")


setInterval(() => {  
    let calender= new Date()
    let year = calender.getFullYear()
    let month = eachMonth[calender.getMonth()]
    let day = calender.getDate()
    let timeHour = calender.getHours()
    let timeMinut =  calender.getMinutes()
    let weekDay =  eachDay[calender.getDay()]

    date.innerText = `${day}th ${month} ${year} `
    

    if (timeHour < 10 && timeMinut < 10)  {
        time.textContent =  "0"+timeHour + ":0" + timeMinut        
    } else {
        time.textContent =  timeHour + ":" + timeMinut 
    }
    }, 1000);


let apii =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let apikey =  "&appid=54f048a99f147b99866418adde1cc493"


let apiCall = async(city)=>{
    let apifetch =  await fetch(apii + city + apikey)
    let data = await apifetch.json()
    let generate = displayweather(data)
    console.log (data)
}

apiCall().catch(error =>{console.log(error)})


let displayweather = (data)=>{
    let townCity = document.querySelector(".city")
    let country = document.querySelector(".country")
    let weatherDegree = document.querySelector(".weatherdegree")
    let weatherCondition = document.querySelector(".condition")
    let windspeed = document.querySelector(".windspeed")
    let Humidity =  document.querySelector(".Humidity")
    let pressure= document.querySelector(".chanceofRainn")
    let sunrise = document.querySelector(".sunrise")
    let sunset = document.querySelector(".sunset")

    townCity.textContent = data.name
    weatherDegree.textContent = Math.round( data.main.temp) +"°"
    weatherCondition.textContent = data.weather[0].main
    windspeed.textContent = data.wind.speed + "km/h"
    Humidity.textContent = data.main.humidity + "%"
    pressure.textContent = data.main.pressure + "mb"  
    country.textContent = "," + ""+ data.sys.country 
    sunrise.textContent = "Sunrise:"+ "" +data.sys.sunrise
    sunset.textContent = "Senset:"+ "" +data.sys.sunset



    let images = document.querySelector(".images")
    let videop = document.querySelector(".videop")

 if (data.weather[0].main == "Clouds") {
    images.src = "/build/images/vecteezy_cloud-3d-render-on-transparent-background_21357793_491.png";
    videop.src = "/build/images/CLOUDS.mp4"
 
} else if (data.weather[0].main == "Rain") {
    images.src = "/build/images/vecteezy_rain-3d-icon_21948143_976.png"
    videop.src = "/build/images/RAININNNN.mp4"

} else if (data.weather[0].main == "Clear") {
    images.src = "/build/images/vecteezy_yellow-sun-light-up_21657604_762.png"
    videop.src = "/build/images/_import_6174f7e5631083.79269933_preview.mp4"

} else if (data.weather[0].main == "Wind") {
    images.src = "/build/images/vecteezy_3d-illustration-of-wind-icon_17811961_342.png"
    videop.src = "/build/images/windygrassnoaudio_preview.mp4"

} else if (data.weather[0].main == "Thurderstorm") {
    images.src = "/build/images/vecteezy_thunderstorm-on-transparent-background_19552639_800.png"
    videop.src = "/build/images/lightning02_preview.mp4"

} else if (data.weather[0].main == "Humid") {
    images.src = "/build/images/vecteezy_water-drop-icon-3d_17339034_6.png"
    videop.src = "/build/images/190516_07_AZ-POND-1_preview.mp4"

} else if (data.weather[0].main == "Lighting") {
    images.src = "/build/images/vecteezy_electric-golden-lightining-isolated-on-transparent-background_20975331_736.png"
    videop.src = "/build/images/lightning02_preview.mp4"

} else if (data.weather[0].main == "Snow") {
    images.src = "/build/images/vecteezy_3d-icon-cloudy-snow-weather-forecast-illustration-concept_24683829_638.png"
    videop.src = "/build/images/Snow-H264 75_preview.mp4"

} else if (data.weather[0].main == "Drizzle") {
    images.src = "/build/images/vecteezy_water-drop-icon-3d_17339034_6.png"
    videop.src = "/build/images/190516_07_AZ-POND-1_preview.mp4"
}
}

let input = document.querySelector("input")
let searchbar = document.querySelector(".searh-icon")

searchbar.addEventListener("click",()=>{
    apiCall(input.value.trimEnd().toUpperCase())

    let article = document.querySelector("article")
    article.classList.add("viewThings")
}) 






