const container= document.querySelector(".container");
const img=document.querySelector(".weather-box img");

const search= document.querySelector(".search-box button");
const weatherbox= document.querySelector(".weather-box");
const weatherdetails= document.querySelector(".weather-details");
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'eed2b44c72msh74b10cfda51c4dap198df0jsn00659bfef079',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const image  = document.querySelector('.weather-box img');
        const temprature  = document.querySelector('.weather-box .temp');
        const description  = document.querySelector('.weather-box .description');

        const humidity  = document.querySelector('.weather-details .humid span');
        const wind  = document.querySelector('.weather-details .wind span');

search.addEventListener("click" ,()=>{
   
    const city = document.querySelector('.search-box input').value;
    if(city=='')
        return;

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options).then(Response=>Response.json()).then((Response)=>{
        if(Response==undefined){
            temprature.innerHTML=`0<span>°C</span>`;
        humidity.innerHTML=`0%`;
        wind.innerHTML=`0km/h`;
        }


        console.log(Response)
        temprature.innerHTML=`${Response.temp}<span>°C</span>`;
        humidity.innerHTML=`${Response.humidity}%`;
        wind.innerHTML=`${Response.wind_speed}km/h`
       
        
        if(Response.cloud_pct<=25){
            img.src="images/clear.png";
            description.innerHTML="clear sky";
        }
        if(Response.temp<10){
            img.src="images/snow.png";
            description.innerHTML="snow"
        }
        if(Response.cloud_pct>=75){
            img.src="images/cloud.png";
            description.innerHTML="cloudy sky"
        }



        

    
    
    
    }).catch(err=>console.error(err));

  
    

})













