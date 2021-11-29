const latitude = 50.4547;
const longitude = 30.5238;

fetch("https://geocode.xyz/50.4547,30.5238?geoit=json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
