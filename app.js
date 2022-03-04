
const keyAPI = `ef45a4fe0ef87620a098e761b96e09f7`;
const loc = `Nottingham`;

let stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`





let cityName, cityTemp, summary;


func1 = () => {
fetch(stringPassIn)
.then((response) => response.json())
.then((data) => {
    console.log(data);
 cityName = data.name ;
 cityTemp = Math.trunc(data.main.temp) - 273;
summary = `In the city of ${cityName} the temperature is ${cityTemp} degrees`;
document.querySelector('body').innerHTML = summary;
   });
};


document.querySelector('button').addEventListener('click', func1);








// const loc = document.getElementById('locInput').value; 
// document.querySelector('button').addEventListener('click', func1);

// .then((data) =>(responseData = data))

// .then(() => {
//     console.log(responseData);
//     document.querySelector('p').innerHTML = responseData.name;
// });




// .then((weather) => {
//     console.log(weather.wind.speed)});


//     .then((weather) => {
//         console.log(weather.weather.map((w)=> console.log(w.description)));
//        });



