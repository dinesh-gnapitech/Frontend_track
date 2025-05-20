document.getElementById('assetForm').addEventListener('submit', function(e) { // Add event listener for form submission. Event listener is a function that waits for a specific event to occur, in this case, the form submission.
  e.preventDefault(); // Prevent default form submission behavior
    // Get the form data
  const data = {
    empName: document.getElementById('empName').value,  // Get employee name
    empId: document.getElementById('empId').value, // Get employee ID
    department: document.getElementById('department').value, // Get department
    assetName: document.getElementById('assetName').value, // Get asset name
    assetId: document.getElementById('assetId').value, // Get asset ID
    assetType: document.getElementById('assetType').value, // Get asset type
    issueDate: document.getElementById('issueDate').value, // Get issue date
    remarks: document.getElementById('remarks').value, // Get remarks
  };

  console.log("Submitted Employee Asset Info:", data); // Log the form data to the console
  alert("Form submitted successfully!"); // Show success message. Alert is a built-in JavaScript function that displays an alert box with a specified message and an OK button.

  this.reset(); // Reset the form fields to their default values. Reset is a method that clears the form inputs.
});
