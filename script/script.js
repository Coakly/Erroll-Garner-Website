  function darkMode() 
  {
      var element = document.body;
      var content = document.getElementById("DarkModetext");
      element.className = "dark-mode";
      content.innerText = "Dark Mode is ON";
  }

  function lightMode() 
  {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }

  function messageOutput(){
    const name = document.getElementById('userName').value;
    document.getElementById("message").textContent = "Welcome to the website, " + name;
    
  }

 // Array of Irish counties
const irishCounties = [
  'Misty', 'Night and Day', 'Where or When', 'Teach Me Tonight', 'Laura'
];

// Function to display Irish counties on the webpage
function displayPieces() {
  const countyList = document.getElementById('piece-list');

  irishCounties.forEach(piece => {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Set the text content of the list item
    listItem.textContent = piece;

    // Append the list item to the unordered list
    countyList.appendChild(listItem);
  });
}

// Call the function to display Erroll's Pieces
displayPieces();

// Example object representing an Irish county
const irishCounty = {
  name: 'Pittsburgh',
  province: 'Pennsylvania',
  population: 300431,
};

// Function to display Pittsburgh info on the webpage
function displayGarner() {
//Select the div with id county-info
  const countyInfoContainer = document.getElementById("county-info");
  // Display the county object properties on the webpage
  countyInfoContainer.innerHTML = `
    <p>Name: ${irishCounty.name}</p>
    <p>Province: ${irishCounty.province}</p>
    <p>Population: ${irishCounty.population}</p>
    `;
}


// Call the function to display county information
displayGarner();

// Validation of form on contactus page
function validateForm() {
  // retrieving form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  // avoiding blank input
  if (name === "" || email === "") {
    alert("Name and email are required");
    return false;
  }
  // validating email format using a simple regular expression
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  // if all validations pass
  return true;
  }