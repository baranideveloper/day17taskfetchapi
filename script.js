const countries= document.getElementById("card")

function restcountries(){
    fetch("https://restcountries.com/v3.1/all")
    .then((response)=>response.json())
    .then((data)=>{
        for(let i=0;i<data.length;i++)
        {
            let countryname=data[i].name.official;
            let flag=data[i].flag;
            let region=data[i].region;
            let countrycode=data[i].cca3;
            let countrycapital=data[i].capital;
            let latlng=data[i].latlng;

            countries.innerHTML += `
            <div class="col-12 col-md-4 mb-4">
            <div class="col">
            <div class="card h-100">
            <div class="card-header">
            <h5 class="card-title d-flex justify-content-center">${countryname}</h5>
            </div>
            <div class="card-body">
            <img src="${flag}" class="card-img-top" alt="...">
            <p class="card-text">Capital: ${countrycapital}</p>
            <p class="card-text">Region: ${region}</p>
            <p class="card-text">Country code: ${countrycode}</p>
            <p class="card-text">Latlng: ${latlng}</P>
            
            <div id="weather${i}">
            </div>
            <a id="toggle" class="btn btn-primary" onclick="weather('${countryname}',${i})"> Click for Weather</a>
            
            
            </div>
            </div>
            </div>
            </div>`
        }
    
    });
}
restcountries()



function weather(country,i){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=1ab91661d835035ed31ed8383bde62a4`)
     .then(response1=>(response1.json()))
     .then(data1=>{
        let weather1=document.getElementById("weather"+i)
        let temp=data1.main.temp
        let pressure=data1.main.pressure
        let humidity=data1.main.humidity



        weather1.innerHTML += `<div class="card-body1"><b>Weather Details</b>
        <ul class="list-group list-group-flush">
        <p class="card-text"><b>Temp:${temp}</br>Pressure:${pressure}</br>Humidity:${humidity}</p>
        </div>`
     })
     .catch((error)=>{
     console.log(error);
     });
};

