const sampleText = document.getElementById("sampleText");
const textArea = document.getElementById("textArea");
const originalText = sampleText.textContent;

function resetEverything() {
  sampleText.textContent = originalText;
  sampleText.style.color = "#202938";
  sampleText.style.fontSize = "22px";
  sampleText.style.fontFamily = "Arial, sans-serif";
  sampleText.style.textDecoration = "none";
  sampleText.style.fontWeight = "normal";
  sampleText.style.fontStyle = "normal";
  sampleText.style.textAlign = "left";
  textArea.style.backgroundColor = "#ffffff";
  document.body.classList.remove("dark-mode");
}

document.querySelectorAll("[data-color]").forEach(function(button) {
  button.addEventListener("click", function() {
    sampleText.style.color = button.dataset.color;
  });
});

document.getElementById("randomColor").addEventListener("click", function() {
  const colors = ["purple", "tomato", "teal", "darkorange", "hotpink"];
  sampleText.style.color = colors[Math.floor(Math.random() * colors.length)];
});

document.getElementById("increaseSize").addEventListener("click", function() {
  const size = parseFloat(getComputedStyle(sampleText).fontSize);
  sampleText.style.fontSize = Math.min(size + 2, 50) + "px";
});

document.getElementById("decreaseSize").addEventListener("click", function() {
  const size = parseFloat(getComputedStyle(sampleText).fontSize);
  sampleText.style.fontSize = Math.max(size - 2, 10) + "px";
});

document.querySelectorAll("[data-font]").forEach(function(button) {
  button.addEventListener("click", function() {
    sampleText.style.fontFamily = button.dataset.font;
  });
});

document.querySelectorAll("[data-decoration]").forEach(function(button) {
  button.addEventListener("click", function() {
    sampleText.style.textDecoration = button.dataset.decoration;
  });
});

document.getElementById("removeDecoration").addEventListener("click", function() {
  sampleText.style.textDecoration = "none";
});

document.getElementById("boldButton").addEventListener("click", function() {
  sampleText.style.fontWeight =
    sampleText.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("italicButton").addEventListener("click", function() {
  sampleText.style.fontStyle =
    sampleText.style.fontStyle === "italic" ? "normal" : "italic";
});

document.querySelectorAll("[data-align]").forEach(function(button) {
  button.addEventListener("click", function() {
    sampleText.style.textAlign = button.dataset.align;
  });
});

document.getElementById("uppercaseButton").addEventListener("click", function() {
  sampleText.textContent = sampleText.textContent.toUpperCase();
});

document.getElementById("lowercaseButton").addEventListener("click", function() {
  sampleText.textContent = sampleText.textContent.toLowerCase();
});

document.querySelectorAll("[data-bg]").forEach(function(button) {
  button.addEventListener("click", function() {
    textArea.style.backgroundColor = button.dataset.bg;
  });
});

document.getElementById("modeButton").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("resetButton").addEventListener("click", resetEverything);