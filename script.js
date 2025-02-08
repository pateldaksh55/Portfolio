
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
    const pdfUrl = 'White%20Simple%20Student%20CV%20Resume.pdf'; 

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




// Typing Text Code
