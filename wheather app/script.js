// Weather App Script: Fetches and displays 7-day weather forecast for a given city using WeatherAPI

// WeatherAPI key for authentication
const API_KEY = '03409103e95d437093165033251905'; 

/**
 * Triggered when the user searches for a city.
 * Reads the city name from the input field, trims whitespace,
 * and calls getWeather() if the input is not empty.
 * Alerts the user if the input is empty.
 */
function searchCity() {
  const city = document.getElementById('city-input').value.trim(); // Get and trim city input 
  if (city !== '') {
    getWeather(city); // Fetch weather for the entered city
  } else {
    alert('Please enter a city name'); // Prompt user to enter a city
  }
}

/**
 * Fetches weather data for the specified city from WeatherAPI.
 * Shows a loading message while fetching.
 * Handles API errors and network errors gracefully.
 * On success, passes forecast data to displayForecast().
 * @param {string} city - The city name to fetch weather for
 */
async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`; // Construct API URL with query parameters
  const container = document.getElementById('weather-container'); // Get the container to display weather data
  container.innerHTML = '<p>Loading...</p>'; // Show loading message

  try {
    const res = await fetch(url); // Fetch weather data from API
    const data = await res.json(); // Parse the JSON response

    // If API returns an error (e.g., city not found), display "City not found"
    if (data.error) {
      container.innerHTML = `<p>City not found</p>`; // Show error message
      return; 
    }

    // Check if the returned city name matches the input (case-insensitive, trimmed)
    if (
      !data.location || // Check if location data is present
      data.location.name.toLowerCase().trim() !== city.toLowerCase().trim() // Check if the city name matches
    ) {
      container.innerHTML = `<p>City not found</p>`; // Show error message
      return;
    }

    // Pass country as well to displayForecast
    displayForecast(data.forecast.forecastday, data.location.name, data.location.country); // Call displayForecast with forecast data and location info
  } catch (error) { 
    container.innerHTML = '<p>Failed to load weather data</p>'; // Show error message
    console.error(error); // Log error for debugging
  }
}

/**
 * Renders the 7-day weather forecast in a table format.
 * Clears previous content, adds a heading with the city and country name,
 * and creates a table with date, weather icon, condition, and temperature.
 * @param {Array} forecastDays - Array of daily forecast objects from API
 * @param {string} cityName - Name of the city (for heading)
 * @param {string} country - Name of the country (for heading)
 */
function displayForecast(forecastDays, cityName, country) { // Function to display the weather forecast
  const container = document.getElementById('weather-container'); // Get the container to display weather data
  container.innerHTML = ''; // Remove any previous weather data 

  // Create and append a heading with the city and country name
  const heading = document.createElement('h2'); // Create a heading element
  heading.textContent = `${cityName}, ${country}`; // Set the heading text to city and country
  container.appendChild(heading); // Append the heading to the container

  // Create a table to display the forecast
  const table = document.createElement('table'); // Create a table element
  table.className = 'weather-table'; // Add class for CSS styling

  // Create the table header row with column names
  const thead = document.createElement('thead'); // Create a table header element
  const headerRow = document.createElement('tr'); // Create a table row for the header 
  const headers = ['Date', 'Icon', 'Condition', 'Temperature']; // Table columns

  headers.forEach(headerText => { // Loop through each header text
    const th = document.createElement('th'); // Create a table header cell
    th.textContent = headerText; // Set the text content to the header text
    headerRow.appendChild(th); // Add each column header
  });
  thead.appendChild(headerRow); // Append the header row to the table header
  table.appendChild(thead); // Append the table header to the table

  // Create the table body and fill it with forecast data
  const tbody = document.createElement('tbody'); // Create a table body element
  forecastDays.forEach(day => {
    // Get the date string from the API (e.g., "2025-05-19")
    const apiDate = day.date;

    // Parse the date as local time to avoid timezone issues
    // Appending 'T00:00:00' ensures correct parsing in all browsers
    const dateObj = new Date(apiDate + 'T00:00:00');

    // Format the date as "Mon, 20 May 2025"
    const weekday = dateObj.toLocaleDateString(undefined, { weekday: 'short' }); // Short weekday name (e.g., "Mon")
    const dayOfMonth = dateObj.toLocaleDateString(undefined, { day: 'numeric' }); // Day of the month (e.g., "20")
    const month = dateObj.toLocaleDateString(undefined, { month: 'short' }); // Short month name (e.g., "May")
    const year = dateObj.toLocaleDateString(undefined, { year: 'numeric' }); // Full year (e.g., "2025")
    const formattedDate = `${weekday}, ${dayOfMonth} ${month} ${year}`; // Combine to form the final date string

    // Extract weather icon URL, condition text, and average temperature
    const iconUrl = day.day.condition.icon; // Weather icon (URL) 
    const condition = day.day.condition.text; // Weather description (e.g., "Sunny")
    const temp = `${day.day.avgtemp_c}°C`; // Average temperature in Celsius

    // Create a new table row for this day's forecast
    const row = document.createElement('tr'); 

    // Date cell
    const dateCell = document.createElement('td');
    dateCell.textContent = formattedDate; // Show formatted date
    row.appendChild(dateCell);

    // Icon cell (shows weather icon image)
    const iconCell = document.createElement('td');
    const img = document.createElement('img'); // Create an image element
    img.src = iconUrl; // Set image source to icon URL (src attribute of the image means the URL of the image)
    img.alt = condition; // Set alt text for accessibility (accessibility means providing a text alternative for non-text content)
    iconCell.appendChild(img);
    row.appendChild(iconCell);

    // Condition cell (text description)
    const conditionCell = document.createElement('td');
    conditionCell.textContent = condition;
    row.appendChild(conditionCell);

    // Temperature cell (average temp)
    const tempCell = document.createElement('td');
    tempCell.textContent = temp;
    row.appendChild(tempCell);

    // Add the row to the table body
    tbody.appendChild(row);
  });

  // Add the table body to the table and the table to the container
  table.appendChild(tbody);
  container.appendChild(table);
}

/**
 * On page load, automatically fetch and display weather for the default city ("Bengaluru").
 */
window.onload = () => {
  getWeather('Bengaluru'); // Fetch weather for default city
};