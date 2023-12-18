import React, { useState } from 'react';

const Testing3d = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[1]);
  };

  const handleUpload = () => {
    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('glbFile', file);

    // Replace 'yourCarId' with the actual car ID you want to associate with the file
    fetch(`http://localhost:5000/upload/657c278d03ad3b9ded4dae28`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Testing3d;
