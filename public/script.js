
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};
document.getElementById("readmore").addEventListener("click", function() {
    document.getElementById("hiddenparagraph").style.display = "block";
    document.getElementById("hiddenparagraph1").style.display = "block";
    document.getElementById("readless").style.display = "inline-block";
    this.style.display = "none";
});
document.getElementById("readless").addEventListener("click", function() {
    document.getElementById("readmore").style.display ="inline-block";
    this.style.display = "none";
    document.getElementById("hiddenparagraph").style.display = "none";
    document.getElementById("hiddenparagraph1").style.display = "none";

});

document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace with your actual PDF file URL
    const pdfUrl = 'White Simple Student CV Resume.pdf'; 

    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = pdfUrl; 
    link.download = 'RESUME.pdf'; // Optional: Set the downloaded file name 
    link.style.display = 'none'; // Hide the link 

    // Append the link to the document and click it to initiate download
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
});

document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.querySelector("input[placeholder='Full Name']").value;
  const email = document.querySelector("input[placeholder='Email Address']").value;
  const phone = document.querySelector("input[placeholder='Phone Number']").value;
  const subject = document.querySelector("input[placeholder='Email Subject']").value;
  const message = document.querySelector("textarea").value;

  try {
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Submission failed. Check the server connection.");
  }
});

// Typing Text Code
