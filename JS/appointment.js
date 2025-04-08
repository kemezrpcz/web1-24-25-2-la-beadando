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