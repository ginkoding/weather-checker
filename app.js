

let cityName, cityTemp, summary;


func1 = (e) => {
   e.preventDefault()

      let loc = document.querySelector("#place").value;
      const keyAPI = `24f8dd8a6c239197fe3f6b7d34b5a7a9`;

let stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`

fetch(stringPassIn)
.then((response) => response.json())
.then((data) => {
    console.log(data);
 cityName = data.name ;
 cityTemp = Math.trunc(data.main.temp) - 273;
 cityFeels = Math.trunc(data.main.feels_like) - 273;
summary = `In ${cityName} the temperature is ${cityTemp} degrees. <br> (But it feels like ${cityFeels} degrees!)`;
document.querySelector('#response').innerHTML = summary;

// if (cityFeels < 8){
//       isItCold = `Wear your big Jacket`
//             document.querySelector('#jacket').innerHTML = isItCold;
//          } else if (cityFeels < 16){
//             isItCold = `Wear a light Jacket`
//                   document.querySelector('#jacket').innerHTML = isItCold;
//          } else (cityFeels < 22){
//             isItCold = `It's warm. You don't need a jacket!`
//                   document.querySelector('#jacket').innerHTML = isItCold;
//       };
   
   });

}


// if (cityFeels < 8){
//    isItCold = `Wear your big Jacket`
//          document.querySelector('#jacket').innerHTML = isItCold;
//       } else if (cityFeels < 16){
//          isItCold = `Wear a light Jacket`
//                document.querySelector('#jacket').innerHTML = isItCold;
//       } else (cityFeels < 22){
//          isItCold = `It's warm. You don't need a jacket!`
//                document.querySelector('#jacket').innerHTML = isItCold;
//    };


document.querySelector('button').addEventListener('click', func1);



















// const keyAPI = `24f8dd8a6c239197fe3f6b7d34b5a7a9`;




// let button = select('#clicky');
// button.mousePressed(weatherQuery);
// input = select('#place');
// }

// function weatherQuery(){
// let stringPassIn = api + place + apiKey;
// loadJSON(stringPassIn, gotData);
// }
// function gotData(data) {
//    weather = data;
// }




// function weatherQuery(){
//    let stringPassIn = api + input.value() + apiKey;
// }


//   let input;

// function locationName(e) {
//    e.preventDefault()
//    // const loc = document.querySelector('input');
//    const nameOfPlace = document.getElementById('place');
//    const keyAPI = `24f8dd8a6c239197fe3f6b7d34b5a7a9`;
//    const url = `http://api.openweathermap.org/data/2.5/weather?q=${nameOfPlace}&appid=${keyAPI}`;
//    fetch(url)
//      .then((res) => res.json())
//      .then(console.log);
//      console.log(url);
//  }



//  function location (e) {
//    let loc = form.input.text;
   // if (location.length === 0) {
	// 	throw new Error('You need to tell me a place');
// } else if (location === 404) {
//    throw new Error("I can't find that place.");
//  }


// let loc = location;




// let api = `http://api.openweathermap.org/data/2.5/weather?q=`

//        let place = document.getElementById('#place')

// let apiKey = `&appid=24f8dd8a6c239197fe3f6b7d34b5a7a9`;

//  let stringPassIn = api + place + apiKey;


//  console.log(stringPassIn);
// const loc = document.querySelector('input');
// console.log(loc)




// let loc = document.getElementById("clicky").onclick = function(e){
//    e.preventDefault()
   // let loc = document.getElementById("place").value.onchange
   // console.log(loc)





// const keyAPI = `24f8dd8a6c239197fe3f6b7d34b5a7a9`;

// let stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`

// console.log(stringPassIn);



// let cityName, cityTemp, summary;


// func1 = (e) => {
//    e.preventDefault()

// // let loc = document.getElementById("clicky").onclick = function(e){
// //        e.preventDefault()
//       let loc = document.getElementById("place").value;
//       const keyAPI = `24f8dd8a6c239197fe3f6b7d34b5a7a9`;

// let stringPassIn = `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${keyAPI}`

// fetch(stringPassIn)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
//  cityName = data.name ;
//  cityTemp = Math.trunc(data.main.temp) - 273;
//  cityFeels = Math.trunc(data.main.feels_like) - 273;
// summary = `In ${cityName} the temperature is ${cityTemp} degrees. <br> (But it feels like ${cityFeels} degrees!)`;
// document.querySelector('p').innerHTML = summary;
//    });
// };




// document.querySelector('button').addEventListener('click', func1);
















//  const loc = document.querySelector('input').addEventListener("input",
// function(event) {
//    event.preventDefault();
// }, false);
// console.log(loc);






// let responseData;

// func1 = () => {
// fetch(stringPassIn)
//   .then((res) => res.json())
//   // .then((d) => console.log(d));
//   // .then((weather) => {
//   //   console.log(weather.weather.map((w) => console.log(w.description)));
//   // });
//   .then((data) => (responseData = data))
//   .then(() => {
//     console.log(responseData);
//     document.querySelector('p').innerHTML = responseData.name;
//   });
// };

//  document.querySelector('button').addEventListener('click', func1);



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











// function myFunction(e) {
//    e.preventDefault()

//    var request;
//    var input1 = document.getElementById('city');
//    var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
//    var apikey =
//        '24f8dd8a6c239197fe3f6b7d34b5a7a9';
//    var sum = api + input1.value + apikey;

//    request = new XMLHttpRequest();

//    request.open('GET', sum, true);
//    request.onload = function () {

//        var data = JSON.parse(this.response);
//        if (request.status >= 200 && request.status < 400) {
//            console.log(data);
//        } else {
//            console.log(input1.value);
//        }
//    }

//    request.send();
// }






