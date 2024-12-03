import React from 'react';

const VideoLessonMaterial = ({ material }) => {
  const downloadVideo = () => {
    const link = document.createElement('a');
    link.href = material.file_path;
    link.download = material.file_name; // Preuzimanje sa originalnim imenom
    link.click();
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