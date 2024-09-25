document.getElementById('custom-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const formData = new FormData(event.target);
    const data = {};

    // Convert form data to JSON object
    formData.forEach((value, key) => {
        if (data[key]) {
            // If the field already exists (like checkboxes), convert the value to an array
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    });

    // Ensure contact_method is an array
    if (data.contact_method && !Array.isArray(data.contact_method)) {
        data.contact_method = [data.contact_method];
    }

    // Send the JSON data to the API endpoint
    fetch('http://localhost:8000/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    /*.then(result => {
        // Redirect to success page
        window.location.href = "submission-result.html?status=success";
    })
    .catch(error => {
        // Redirect to error page
        window.location.href = "submission-result.html?status=error";
    });*/
});
