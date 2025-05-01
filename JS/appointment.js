import {getServicePrice} from "./services.js"

const name = document.getElementById("name");
const email = document.getElementById("email");
const date = document.getElementById("date"); 
const time = document.getElementById("time");
const more = document.getElementById("more");
const feedback = document.getElementById("feedbackMsg");
const booked = document.getElementById("bookedDate")
const btnBooking = document.getElementById("booking");
const service = document.getElementById("service");

btnBooking.addEventListener("click", () => {
  const validationMessage = validate();

  if (validationMessage === "ok") {
    feedback.textContent = "";
    booked.innerHTML = "";
    booked.style.visibility = "visible";
    
    const h3 = document.createElement("h3");
    h3.textContent = "Sikeres foglalás!"
    booked.appendChild(h3);

    const p1 = document.createElement("p");
    p1.textContent = name.value;
    booked.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = email.value;
    booked.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = date.value + " " + time.value;
    booked.appendChild(p3);
    
    const p4 = document.createElement("p");
    const selectedOption = [...service.options].find(option => option.value === service.value).textContent;
    p4.textContent = selectedOption + " = " + getServicePrice(selectedOption) + " Ft";
    booked.appendChild(p4);

    const p5 = document.createElement("p");
    p5.textContent = more.value;
    booked.appendChild(p5);

  }
  else {
    feedback.textContent = validationMessage;
  }
});

function validate() {
  if (name.value.trim() === "") return "A név megadása kötelező!";
  if (name.value.trim().length < 10) return "A név legalább 10 karakter hosszú legyen!";
  if (email.value.trim() === "") return "Az email megadása kötelező!";
  if (email.value.trim().length < 10) return "Az email legalább 10 karakter hosszú legyen!";
  if (!email.value.includes("@")) return "Az email cím érvénytelen!";
  if (date.value === "") return "Kérlek válassz dátumot!";
  if (time.value === "") return "Kérlek válassz időpontot!";
  
  return "ok";
}

flatpickr("#date", {
  dateFormat: "Y-m-d",
  minDate: "today",
  defaultDate: "today",
  locale: "hu",
  disable: [
      function(date) {
        return (date.getDay() === 6 || date.getDay() === 0);
      }
    ],
});

flatpickr("#time", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  locale: "hu",
  minTime: "8:00",
  maxTime: "19:00",
  defaultDate: "8:00",
  minuteIncrement: "30",
});