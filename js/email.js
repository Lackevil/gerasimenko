// EmailJS

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "qwXVj3QMkrheMZJG0",
  });
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        () => {
          console.log("SUCCESS!");
          alert('Сообщение отправлено')
        },
        (error) => {
          console.log("FAILED...", error);
          alert('Сообщение не отправлено')
        }
      );
    });
};

const submitBtn = document.querySelector('.footer__submit')