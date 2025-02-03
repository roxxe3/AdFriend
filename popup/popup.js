// This file is intentionally left blank.
const container = document.getElementById("popup-container");
document.getElementById("action-button").addEventListener("click", () => {
    console.log('Extension icon clicked');
    container.innerHTML += "<p>Extension icon clicked</p>";
    
});