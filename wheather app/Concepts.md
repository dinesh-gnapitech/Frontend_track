
# Concepts Used in 7-Day Weather Forecast Application

## 📄 HTML (index.html)
- **Doctype Declaration**: `<!DOCTYPE html>` declares HTML5 standard.
- **Meta Tags**:
  - `charset="UTF-8"` for character encoding.
  - `viewport` tag ensures responsive design on all devices.
- **Title Tag**: Sets browser tab title.
- **Link Tag**: Includes external CSS (`styles.css`).
- **Input and Button**:
  - Input field to accept city name.
  - Button triggers a JavaScript function on click.
- **Script Tag**: Includes external JS (`script.js`).
- **Div Containers**:
  - `search-bar` div for input and button.
  - `weather-container` for dynamic weather forecast output.

## 🎨 CSS (styles.css)
- **Global Styling**:
  - `body` styling with font, padding, background, and text alignment.
- **Flexbox**:
  - Used in `.search-bar` and `.weather-container` for layout.
- **Input & Button Styling**:
  - Rounded corners with `border-radius`.
  - Red borders using `box-shadow`.
- **Weather Table**:
  - `.weather-table` with full-width and hidden headers.
- **Responsive Design**:
  - `flex-wrap`, `gap`, `justify-content` used for mobile friendliness.
- **Weather Cards (Optional)**:
  - `.weather-card` design with background, padding, and animation.
- **Image Sizing**:
  - Weather icons set to fixed width and height.

## 🧠 JavaScript (script.js)

### 🔑 API Integration
- Uses **WeatherAPI** for fetching 7-day forecasts.
- `API_KEY` is hardcoded (should be stored securely in production).

### 📥 Input Handling
- `searchCity()`:
  - Reads city name from input.
  - Calls `getWeather(city)` if input is valid.

### 🌐 Fetching Weather
- `getWeather(city)`:
  - Constructs API URL using template literals.
  - Displays "Loading..." message.
  - Handles success and failure responses.
  - On success, calls `displayForecast()`.

### 📊 Displaying Forecast
- `displayForecast()`:
  - Clears previous results.
  - Creates a heading for city and country.
  - Creates a table dynamically:
    - Headers: Date, Icon, Condition, Temperature.
    - Rows: One for each forecast day.
  - Parses date using `Date` and `toLocaleDateString()`.

### 🧪 Error Handling
- Network/API errors caught using `try...catch`.
- `data.error` check for API-level issues.
- Fallback message for unrecognized city.

### 🛠 DOM Manipulation
- `document.createElement()`, `textContent`, `appendChild()` to build UI.
- Dynamic elements created based on API response.

### 🚀 Auto Load
- `window.onload`: Automatically loads Bengaluru's forecast on page load.

## 🧩 Best Practices Observed
- Separation of concerns (HTML for structure, CSS for style, JS for logic).
- Clean, modular code.
- Graceful error handling.
- Semantic and accessible HTML elements.

## ✅ Optional Enhancements (Supported by Styles)
- Weather cards UI (instead of table).
- Animated borders.
- Flexbox-based responsive layout.
