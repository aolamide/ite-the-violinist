const bookingForm = document.querySelector("form");
const btnSubmit = document.getElementById("btn-submit");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const locationInput = document.getElementById("location");
const dateInput = document.getElementById("date");
const typeInput = document.getElementById("type");
const durationInput = document.getElementById("duration");
const error = document.getElementById("booking-error");
const success = document.getElementById("booking-success");

const onSubmit = (e) => {
  e.preventDefault();
  error.innerText = "";
  success.innerText = "";
  if (
    !nameInput.value.trim() ||
    !emailInput.value.trim() ||
    !locationInput.value.trim() ||
    !dateInput.value.trim() ||
    !typeInput.value.trim() ||
    !durationInput.value.trim()
  ) {
    error.innerText = "Please fill all fields";
    return;
  }
  btnSubmit.innerText = "...";
  btnSubmit.disabled = true;
  fetch("https://site-server.herokuapp.com/send", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      date: dateInput.value,
      location: locationInput.value,
      eventType: typeInput.value,
      duration: durationInput.value,
      ite: true,
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.error) {
        error.innerText = result.error;
      } else {
        nameInput.value = "";
        emailInput.value = "";
        locationInput.value = "";
        dateInput.value = "";
        typeInput.value = "";
        durationInput.value = "";
        success.innerText =
          "Thank you, Request has been sent. I will reach out to you as soon as possible.";
      }
    })
    .catch((err) => {
      console.log(err);
      error.innerText = "Network error, please retry.";
    })
    .finally(() => {
      btnSubmit.innerText = "Send";
      btnSubmit.disabled = false;
    });
};

bookingForm.addEventListener("submit", onSubmit);
