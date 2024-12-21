const apikey = "7df3fab25877ab3cbb382b5deb967d41"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?"

async function checkweather() {
    const inputText=document.getElementById("inputtext").value;
    const response = await fetch(`${apiurl}?&q=${inputText}&appid=${apikey}&units=metric`);
    if (response.status===404){
        document.getElementById("error").style.display="block";
        document.getElementById("weather").style.display="none";
    }else {
    document.getElementById("error").style.display="none";
    let data = await response.json();
    console.log("Weather API Response: ", data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+" Km/h";

    let iMage=document.getElementById("image")
    if(data.weather[0].main=="Clear"){
        iMage.src="clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        iMage.src="clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        iMage.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        iMage.src="Drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        iMage.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";
}}

