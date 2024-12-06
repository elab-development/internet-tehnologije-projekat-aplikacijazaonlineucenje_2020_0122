import React from 'react';
import axios from 'axios';

const VideoLessonMaterial = ({ material }) => {
    console.log(material);
    const downloadVideo = async () => {
        try {
          // Slanje GET zahteva ka API-u za preuzimanje
          const response = await axios.get(material.file_path, {
            responseType: 'blob', // Preuzimanje binarnog sadržaja
          });
    
          // Kreiranje Blob objekta iz odgovora
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
    
          // Generisanje linka za preuzimanje
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = material.file_name; // Originalno ime fajla
          document.body.appendChild(link);
          link.click(); // Pokreće preuzimanje
          document.body.removeChild(link); // Uklanja link nakon preuzimanja
        } catch (error) {
          console.error('Error downloading file:', error);
          alert('Error downloading file. Please try again.');
        }
      };
  
  return (
    <div className="video-container">
      <p>{material.file_name}</p>
      <video width="320" height="240" controls>
        <source src={material.file_path} />
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={downloadVideo} className="download-button">
        Download Video
      </button>
    </div>
  );

};
export default VideoLessonMaterial;