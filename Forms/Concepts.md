
# Employee Asset Information Form - Concepts Overview

This document outlines the key HTML, CSS, and JavaScript concepts used in the Employee Asset Information Form project.

---

##  HTML (index.html)

### 1. Basic Structure
- `<!DOCTYPE html>`: Defines the document type.
- `<html>`, `<head>`, `<body>`: Standard HTML document structure.

### 2. Metadata
- `<meta charset="UTF-8">`: Sets character encoding.
- `<meta name="viewport">`: Ensures responsiveness on mobile devices.
- `<title>`: Defines the title of the page.

### 3. Linking External Resources
- `<link rel="stylesheet" href="style.css">`: Links to external CSS.
- `<script src="script.js"></script>`: Links to external JavaScript.

### 4. Form and Inputs
- `<form>`: Used to collect user input.
- Input fields: `type="text"`, `type="date"`, `<textarea>`, and `<button>`.
- Attributes: `id`, `required`, `for` (in labels).

### 5. Layout
- Grouping inputs using `<div class="form-row">`.

---

##  CSS (style.css)

### 1. Basic Styling
- `font-family`, `background-color`, `margin`, `padding`.

### 2. Container Styling
- `max-width`, `margin: auto`, `padding`, `border-radius`, `box-shadow`.

### 3. Typography and Alignment
- `text-align: center`, `font-weight: bold`, `margin-bottom`.

### 4. Flexbox Layout
- `.form-row { display: flex; flex-direction: column; }`: Arranges elements vertically.

### 5. Form Input Styling
- `padding`, `border`, `border-radius`.

### 6. Button Styling
- `background-color`, `color`, `cursor`, `transition`, `:hover` state.

---

##  JavaScript (script.js)

### 1. DOM Manipulation
- `document.getElementById()`: Accesses HTML elements by ID.

### 2. Event Handling
- `addEventListener('submit', function(e) {...})`: Listens for form submission.
- `e.preventDefault()`: Prevents default form submission behavior.

### 3. Form Data Collection
- Reads values using `.value` from input fields.

### 4. Feedback
- `console.log()`: Logs data to the browser console.
- `alert()`: Displays a success message popup.

### 5. Form Reset
- `form.reset()`: Clears all input fields after submission.

---



