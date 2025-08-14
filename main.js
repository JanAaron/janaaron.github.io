const page = document.URL;

if (page.includes("session.html")) {
  const sessionButton = document.getElementById("js-book-session");
  const sessionForm = document.getElementById("js-session-booking-form");
  sessionButton.addEventListener("click", () => {
    sessionForm.innerHTML = "Booking Confirmed!";
    sessionForm.style.fontSize = "55px";
    sessionForm.style.color = "gray";
  });
}

if (page.includes("lesson.html")) {
  const lessonButton = document.getElementById("js-book-lesson");
  const lessonForm = document.getElementById("js-lesson-booking-form");
  lessonButton.addEventListener("click", () => {
    lessonForm.innerHTML = "Booking Confirmed!";
    lessonForm.style.fontSize = "55px";
    lessonForm.style.color = "gray";
  });
}

if (page.includes("index.html")) {
  const newsletter = document.getElementById("js-newsletter");
  const subscribeButton = document.getElementById("js-subscribe");

  subscribeButton.addEventListener("click", () => {
    newsletter.innerHTML = "Thank you! You've been added to our mailing list.";
    newsletter.style.height = "44px";
    newsletter.style.fontSize = "20px";
    newsletter.style.marginTop = "45px";
  });
}
