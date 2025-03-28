// Write your code here!
// Remove the main element
const main = document.getElementById("main");
main.remove();

// Create a new h1 element
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";

// Append the new header to the body
document.body.append(newHeader);

// Create a new div
const element = document.createElement("div");

// Create an unordered list and populate it with list items
const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

// Append the unordered list to the div
element.append(ul);

// Add styles to the element
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

// Add a class to the element
element.classList.add("custom-class");

// Append the div to the body
document.body.append(element);

// Remove the second child from the list
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Remove the entire unordered list
ul.remove();
