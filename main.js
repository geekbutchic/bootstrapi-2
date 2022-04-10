let button = document.querySelector(`#button`);

button.addEventListener(`click`, () => {
  let url = `https://dog.ceo/api/breeds/image/random`;
  let img = document.querySelector(`img`);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      img.src = data.message;
    });
});

let button2 = document.querySelector(`#button2`);

button2.addEventListener(`click`, () => {
  let weatherInput = document.querySelector(`.form-control`);
  let city = weatherInput.value;
  let url = `https://goweather.herokuapp.com/weather/` + city;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(`temp`).innerText = data.temperature;
      document.getElementById(`wind`).innerText = data.wind;
      document.getElementById(`data`).innerText = data.description;
    });
});
