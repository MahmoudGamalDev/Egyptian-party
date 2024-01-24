let barsIcon = document.querySelector(".icon");
let closeIcon = document.querySelector(".fa-xmark");
let nav = document.querySelector("nav");

barsIcon.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("show-nav");
});

let countDown = (date) => {
  // a func that returns seconds, minutes, hours and days till a given date in the future
  let eventDate = new Date(date);
  let dateNow = new Date();
  let timeTillEvent = eventDate - dateNow;
  let days = Math.floor(timeTillEvent / 1000 / 60 / 60 / 24);
  let hours = Math.floor((timeTillEvent / 1000 / 60 / 60 / 24 - days) * 24);
  let minutes = Math.floor(
    ((timeTillEvent / 1000 / 60 / 60 / 24 - days) * 24 - hours) * 60
  );
  let seconds = Math.floor(
    (((timeTillEvent / 1000 / 60 / 60 / 24 - days) * 24 - hours) * 60 -
      minutes) *
      60
  );

  return { days, hours, minutes, seconds };
};

let displayCountDown = () => {
  let countDownObj = countDown("Dec 25, 24");
  let eventSection = document.querySelector(".event-section");
  eventSection.innerHTML = `<div class="days p-5 fs-3 fw-semibold border-1 border-white border">${countDownObj.days} D</div>
  <div class="hours p-5 fs-3 fw-semibold border-1 border-white border">${countDownObj.hours} h</div>
  <div class="mins p-5 fs-3 fw-semibold border-1 border-white border">${countDownObj.minutes} m</div>
  <div class="sec p-5 fs-3 fw-semibold border-1 border-white border">${countDownObj.seconds} s</div>`;
};

setInterval(displayCountDown, 1000);

let message = document.querySelector("textarea");
let characters = document.querySelector("form span");

message.addEventListener("keyup", () => {
  remainingCharacters = 100 - message.value.length;

  if (remainingCharacters > 0) {
    characters.innerHTML = `<span class="text-danger fs-3 pe-2">${remainingCharacters}</span>`;
  } else {
    characters.innerHTML = `<span class="text-danger fs-3 pe-2">0</span>`;
  }
}); 