
import displayweather from "./ifelse.js"
import { displayTimeIntervale } from "./ifelse.js"

       
let apiCall = async(city)=>{
    let apii =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
    let apikey =  "&appid=54f048a99f147b99866418adde1cc493"

    let apifetch =  await fetch(apii + city + apikey)
    let data = await apifetch.json()
    let generate = displayweather(data)
    console.log (data)
} 
apiCall().catch(error =>{console.log(error)})


let input = document.querySelector("input")
let searchbar = document.querySelector(".searh-icon")

searchbar.addEventListener("click",()=>{
    apiCall(input.value.trimEnd().toUpperCase())

    let article = document.querySelector("article")
    article.classList.add("viewThings")
}) 
