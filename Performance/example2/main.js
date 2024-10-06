console.log("Main script loaded");

// Simulating some non-critical functionality
function initializeApp() {
  const techniques = document.querySelectorAll(".optimization-technique");
  techniques.forEach((technique, index) => {
    technique.style.transitionDelay = `${index * 100}ms`;
    technique.style.opacity = "1";
  });
}

window.addEventListener("load", initializeApp);
