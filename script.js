const latitude = 50.4547;
const longitude = 30.5238;

let buttonCoun = document.querySelector(".buttonS");

let searchC = document.querySelector(".searchN");
let searchGeo = document.querySelector(".searchK");

searchC.onchange = function () {
  if (searchGeo.value == "") {
    buttonCoun.disabled = false;
  } else {
    buttonCoun.disabled = true;
  }
};

searchGeo.onchange = function () {
  if (searchC.value == "") {
    buttonCoun.disabled = false;
  } else {
    buttonCoun.disabled = true;
  }
};

let capitalCountry = document.querySelector(".capitaL");
let populationCountry = document.querySelector(".population");
let nameMoneyCoutry = document.querySelector(".nameMoney");

let nameOfcountryC = document.querySelector(".nameOfcountry");
let flagCountry = document.querySelector(".flag");

buttonCoun.addEventListener("click", function () {
  fetch("https://restcountries.com/v3.1/name/" + searchC.value)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let flagC = data[0]["flags"]["png"];
      let namCountry = data[0]["name"]["common"];
      let capCoun = data[0].capital;
      let popCoun = data[0].population;
      let moneyCoun = data[0].currencies;

      for (let i in moneyCoun) {
        nameMoneyCoutry.innerHTML = i;
      }

      flagCountry.innerHTML = flagC;
      flagCountry.src = flagC;
      capitalCountry.innerHTML = capCoun;
      populationCountry.innerHTML = popCoun;
      nameOfcountryC.innerHTML = namCountry;

      let list = document.querySelector(".wrapperCard");
      let bordersCountry = data[0].borders;
      for (let key in bordersCountry) {
        let resultCountryBorder = bordersCountry[key];
        console.log(resultCountryBorder);
        fetch("https://restcountries.com/v3.1/alpha/" + bordersCountry[key])
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            list.innerHTML += `
            <div><img src="${data[0]["flags"]["png"]}" alt="flag" class="flag"></img></div>
            <p class="nameOfcountry">${data[0]["name"]["common"]}</p>
            <p class="capitaL">${data[0].capital}</p>
            <p class="population">${data[0].population}</p>
            <p class="nameMoney">${data[0].currencies} </p>`;
          });
      }
    });

  fetch(
    "https://geocode.xyz/" +
      searchGeo.value +
      "?geoit=json&auth=432592667252078483784x104564"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let geoCountry = data.country;
      console.log(data.country);
      fetch("https://restcountries.com/v3.1/name/" + geoCountry)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let flagC = data[0]["flags"]["png"];
          let namCountry = data[0]["name"]["common"];
          let capCoun = data[0].capital;
          let popCoun = data[0].population;
          let moneyCoun = data[0].currencies;

          for (let i in moneyCoun) {
            nameMoneyCoutry.innerHTML = i;
          }

          flagCountry.innerHTML = flagC;
          flagCountry.src = flagC;
          capitalCountry.innerHTML = capCoun;
          populationCountry.innerHTML = popCoun;
          nameOfcountryC.innerHTML = namCountry;

          let lister = document.querySelector(".wrapperCardGeoBorders");
          let bordersCountryGeo = data[0].borders;
          for (let key in bordersCountryGeo) {
            let resultCountryBorderGeo = bordersCountryGeo[key];
            console.log(resultCountryBorderGeo);
            fetch(
              "https://restcountries.com/v3.1/alpha/" + bordersCountryGeo[key]
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                lister.innerHTML += `
                  <div><img src="${data[0]["flags"]["png"]}" alt="flag" class="flag"></img></div>
                  <p class="nameOfcountry">${data[0]["name"]["common"]}</p>
                  <p class="capitaL">${data[0].capital}</p>
                  <p class="population">${data[0].population}</p>
                  <p class="nameMoney">${data[0].currencies} </p>`;
              });
          }
        });
    });
});
