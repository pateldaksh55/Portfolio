// EmailJS Initialization (Replace with your actual public key)
(function () {
  emailjs.init("ZMEHWh_iEhccaWYj1");
})();

// Navbar Toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Close menu when a link is clicked (Mobile Fix)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
  });
});

// Read More / Read Less Functionality
document.getElementById("readmore")?.addEventListener("click", function() {
  document.getElementById("hiddenparagraph").style.display = "block";
  document.getElementById("hiddenparagraph1").style.display = "block";
  document.getElementById("readless").style.display = "inline-block";
  this.style.display = "none";
});

document.getElementById("readless")?.addEventListener("click", function() {
  document.getElementById("readmore").style.display = "inline-block";
  this.style.display = "none";
  document.getElementById("hiddenparagraph").style.display = "none";
  document.getElementById("hiddenparagraph1").style.display = "none";
});

// Download CV Button
let downloadBtn = document.getElementById('downloadButton');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function() {
    const pdfUrl = 'White Simple Student CV Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// EmailJS Contact Form Submission
function sendmail(event) {
  event.preventDefault();

  let submitButton = document.getElementById("submitButton");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  let subject = document.getElementById("subject").value;

  if (!name || !email || !phone || !message || !subject) {
    alert("Please fill in all fields before submitting.");
    submitButton.textContent = "Submit";
    submitButton.disabled = false;
    return;
  }

  let parms = { name, email, phone, message, subject };

  emailjs.send("service_zpvxm94", "template_ewa2htb", parms)
    .then(function (response) {
      console.log("Email sent successfully:", response);
      alert("Your Response Has Been Submitted!");
      document.getElementById("contact-form").reset();
      submitButton.textContent = "Submit";
      submitButton.disabled = false;
    })
    .catch(function (error) {
      console.error("Error sending email:", error);
      alert("Submission failed. Please try again.");
      submitButton.textContent = "Submit";
      submitButton.disabled = false;
    });
}

// Attach event listener to form submission
document.getElementById("contact-form")?.addEventListener("submit", sendmail);


document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".multiple-text", {
    strings: ["Information Technology","Information Technology", "Android Developer", "Web Developer"],
    typeSpeed: 100, // Speed of typing
    backSpeed: 100, // Speed of deleting
    backDelay: 1000, // Delay before starting to delete
    loop: true // Keeps looping
  });
});

