

document.getElementById("signin-button").addEventListener("click", function() {
    document.getElementById("form-container").style.display = "block";
  });
  
  const container = document.getElementById('rank-container');

for (let i = 1; i <= 5; i++) {
  container.innerHTML += rankBox;
}

// Add CSS styles to the document
const styleElement = document.createElement('style');
styleElement.innerHTML = rankBoxStyles;
document.head.appendChild(styleElement);
