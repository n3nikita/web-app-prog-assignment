document.addEventListener("DOMContentLoaded", function () {
  // enable boostrap popovers
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );

  // get saved theme from localstorage so theme will stay after page reload
  let savedTheme = localStorage.getItem("theme");

  if (!savedTheme) {
    localStorage.setItem("theme", "light");
    savedTheme = "light";
  }

  // set the initial theme
  setTheme(savedTheme);
});

function updateCatImage() {
  let image = document.getElementById("cat-img");
  image.src = "https://cataas.com/cat?" + new Date().getTime();
}

function setTheme(theme) {
  let themeToggle = document.getElementById("theme-toggle");
  let bodyElement = document.body;

  if (theme === "light") {
    themeToggle.textContent = "Switch to Dark Theme";
    bodyElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "Switch to Light Theme";
    bodyElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

function deleteItem(button) {
  let listItem = button.parentNode;
  let list = document.getElementById("list");

  list.removeChild(listItem);
}

function addItem() {
  let newItemText = document.getElementById("item-name").value;

  if (newItemText.trim() !== "") {
    let list = document.getElementById("list");

    let newItem = document.createElement("li");
    newItem.className =
      "list-group-item d-flex align-items-center justify-content-between";
    newItem.innerHTML =
      newItemText +
      '<button class="btn btn-outline-danger" onclick="deleteItem(this)">Delete</button>';

    list.appendChild(newItem);
  }

  document.getElementById("item-name").value = "";
}

// assign functions to html elements
document
  .getElementById("cat-update-btn")
  .addEventListener("click", () => updateCatImage());

document
  .getElementById("add-item-btn")
  .addEventListener("click", () => addItem());

document.getElementById("theme-toggle").addEventListener("click", function () {
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
});
