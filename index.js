// // // 

// // async function fetchData(){
// //     try{
        
// //         const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current_weather=true`);

// //         console.log(response)
// //         // console.log('hi eunice')

// //         if(!response.ok){
// //             console.log('could not fetch data!')
// //         }

// //         const data = response.json();
// //         console.log(data)

// //         // console.log(data);
// //     }
// //     catch(error){
// //         console.log(error);
// //     }
// // }

// // fetchData();

// const weatherForm = document.querySelector('.weatherForm');
// const placeInput = document.getElementById('find-place');
// const card = document.querySelector('.card');
// const apiKey = '15610206c9227516a68b11de4484c021';

// const apiUrl = async 

// async function fetchWeather(){
//     const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat={15.48017}&lon={120.59794}&limit={limit}&appid={15610206c9227516a68b11de4484c021}`)

//     console.log(response)


// }

// fetchGeocode();

const apiKey = '15610206c9227516a68b11de4484c021';

async function fetchGeocode(cityName, stateCode, countryCode, limit = 1){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${apiKey}`)

    // console.log(response)
    if(!response.ok){
        console.log('could not fetch data')
        return;
    }

    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;
    console.log(data)
    console.log(lat)
    console.log(lon)
    return data;

}

fetchGeocode('Manila', 'Metro Manila', 'PH');

// // console.log(lat)

// // async function fetchWeatherData(){
// //     const response = await fetch('')
// // }