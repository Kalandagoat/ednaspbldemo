// Initialize and add the map using Leaflet.js
var map = L.map('map').setView([40.7128, -74.0060], 10);  // Center the map to New York City

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example locations for food rescue (Add actual data or dynamically fetch from a source)
var locations = [
  { lat: 40.730610, lng: -73.935242, title: "Food Bank NYC" },
  { lat: 40.752776, lng: -73.977968, title: "Community Kitchen" },
  { lat: 40.705627, lng: -73.978003, title: "Food Rescue Network" }
];

// Add markers for each location
locations.forEach(function(location) {
  L.marker([location.lat, location.lng]).addTo(map)
    .bindPopup(location.title)
    .openPopup();
});

// Function for recognizing food image (Placeholder for actual recognition system)
function recognizeFoodImage() {
  var fileInput = document.getElementById("food-image");
  var file = fileInput.files[0];
  if (file) {
    document.getElementById("food-recognition-result").innerText = "Recognizing food item... (This is a placeholder for the image recognition system)";
  }
}

// Function to handle the form submission and log food waste
document.getElementById('food-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const foodName = document.getElementById('food-name').value;
  const quantity = document.getElementById('quantity').value;

  if (foodName && quantity) {
    const logList = document.getElementById('log-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Food Item: ${foodName} - Quantity: ${quantity}kg`;

    logList.appendChild(listItem);

    // Clear the input fields
    document.getElementById('food-name').value = '';
    document.getElementById('quantity').value = '';
  }
});

// Additional functionality for Share Food button (example placeholder)
document.querySelector('button[onclick="alert(\'Share or trade your surplus food with others in your community!\')"]').addEventListener('click', function() {
  alert('Share or trade your surplus food with others in your community!');
});

// Additional functionality for Start Challenge button (example placeholder)
document.querySelector('button[onclick="alert(\'Join a food waste challenge and track your points!\')"]').addEventListener('click', function() {
  alert('Join a food waste challenge and track your points!');
});
