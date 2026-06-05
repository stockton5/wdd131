const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const errors = document.querySelector("#errors");

typeSelect.addEventListener("change", function () {
  if (typeSelect.value === "student") {
    extraField.classList.remove("hidden");
    extraLabel.textContent = "Student I#";
    extraInput.value = "";
    extraInput.placeholder = "Enter 9 digit student I#";
  } else if (typeSelect.value === "guest") {
    extraField.classList.remove("hidden");
    extraLabel.textContent = "Access Code";
    extraInput.value = "";
    extraInput.placeholder = "Enter access code";
  } else {
    extraField.classList.add("hidden");
    extraInput.value = "";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  errors.innerHTML = "";

  let messages = [];

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const eventDate = document.querySelector("#eventDate").value;
  const type = typeSelect.value;
  const extraValue = extraInput.value.trim();

  if (firstName === "") {
    messages.push("First name is required");
  }

  if (lastName === "") {
    messages.push("Last name is required");
  }

  if (email === "") {
    messages.push("Email is required");
  }

  if (type === "") {
    messages.push("Type is required");
  }

  if (eventDate === "") {
    messages.push("Event date is required");
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(eventDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      messages.push("Event date must be later than the current date");
    }
  }

  if (type === "student") {
    const studentPattern = /^[0-9]{9}$/;

    if (!studentPattern.test(extraValue)) {
      messages.push("Student I# must be 9 digits");
    }
  }

  if (type === "guest") {
    if (extraValue !== "EVENT131") {
      messages.push("Access Code must be EVENT131");
    }
  }

  if (messages.length > 0) {
    messages.forEach(function (message) {
      const error = document.createElement("p");
      error.textContent = message;
      errors.appendChild(error);
    });
  } else {
    const success = document.createElement("p");
    success.textContent = "Ticket created successfully!";
    errors.appendChild(success);
  }
});