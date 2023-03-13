// Select the main element by its ID
const main = document.querySelector("#main");

// Remove the main element from the DOM
main.remove();

// Create a new h1 element
const newHeader = document.createElement("h1");

// Add text to the h1 element
const text = document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(text);

// Set the ID of the h1 element to 'victory'
newHeader.setAttribute("id", "victory");

// Add the new h1 element to the body of the document
document.body.appendChild(newHeader);
