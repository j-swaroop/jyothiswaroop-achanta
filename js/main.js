import "./components/products.js";

const editableElements = document.querySelectorAll('[contenteditable="true"]');

editableElements.forEach((element) => {
  element.addEventListener("blur", () => {
    if (element.innerText.trim() === "") {
      element.textContent = "Enter Text Here";
    }
  });
});
