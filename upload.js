document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (file) {
        const fileName = file.name;

        // Display a success message in the upload status area
        document.getElementById('upload-status').innerText = `File "${fileName}" uploaded successfully!`;

        // Display the file in the uploaded files list
        const uploadedFilesList = document.getElementById('uploaded-files-list');
        const listItem = document.createElement('li');
        listItem.textContent = fileName;
        uploadedFilesList.appendChild(listItem);

        // Clear the file input after submission
        fileInput.value = '';
    } else {
        document.getElementById('upload-status').innerText = 'Please select a file to upload.';
    }
});
