console.save = (obj, fileType: String = "application/json", fileName: String = "file.json") => {
    // Convert the Object data to JSON
    if (fileType === "application/json") obj = JSON.stringify(obj, null, 4);
    // Convert the JSON data to a Blob
    const blob = new Blob([obj], {type: fileType});
    // Create a temporary link element
    const tempLink = document.createElement('a');
    tempLink.href = URL.createObjectURL(blob);
    tempLink.setAttribute('download', fileName);
    tempLink.style.display = 'none';
    // Append the link to the document body
    document.body.appendChild(tempLink);
    // Click the link to initiate the download
    tempLink.click();
    // Clean up by removing the link element
    document.body.removeChild(tempLink);
}