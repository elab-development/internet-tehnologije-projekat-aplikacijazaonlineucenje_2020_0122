import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import VideoLessonMaterial from "../../../components/VideoLessonMaterialContainer/VideoLessonMaterial.jsx";

const LessonMaterialsPage = ({loggedUser}) => {
  const [materials, setMaterials] = useState(null);
  const location = useLocation();
  const lesson = location.state;

async function handleFileChange(e) {
    e.preventDefault();
    const newFiles = Array.from(e.target.files);
    const fileToUpload = e.target.files[0];
    const formData = new FormData();


    formData.append("file", fileToUpload);
    formData.append("lesson_id", lesson.id);

            
    const fileType = fileToUpload.type.startsWith("video/") ? "video" : "text";
            
    formData.append("type", fileType);

    //console.log([...formData.entries()]);
    await axios.post('api/materials', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        console.log(res.data);
        setMaterials(res.data.data);
    });

    
  }

  function handleDownload(e){
    
  }

  useEffect(() => {
    if (!materials) {
      axios
        .get("api/lesson/" + lesson.id + "/materials")
        .then((res) => {
          setMaterials(res.data.data);
          
        })
        .catch((err) => {
          console.error("Error fetching materials:", err);
        });
    }
  }, [materials, lesson.id]);

  const videoMaterials = materials?.filter(material => material.type === 'video') || [];
  const textMaterials = materials?.filter(material => material.type === 'text') || [];

  return (
    <div className="container">
      <header className="row">
        <div className="col-sm">
          <h1 className="primary">Lesson Materials</h1>
        </div>
      </header>

      {loggedUser?.role_id === 2 && (
  <div className="row">
    <div className="col-sm">
      <label htmlFor="materials" className="label-inline">
        <strong>Add Materials:</strong>
      </label>
      <input
        type="file"
        id="materials"
        multiple
        className="input-block"
        onChange={handleFileChange}
      />
    </div>
  </div>
)}

      <div className="row margin-top">
      {materials ? (
          <>
            <h2>Videos</h2>
            <div className="cards">
              {videoMaterials.map((material) => (
                <div className="card" key={material.id}>
                  <VideoLessonMaterial material={material} />
                </div>
              ))}
            </div>

            <h2>Documents</h2>
            <div className="cards">
              {textMaterials.map((material) => (
                <div className="card" key={material.id}>
                  <p>{material.file_name}</p>
                  <a
                    onClick={handleDownload}
                    
                    download={material.file_name}
                    className="button"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="loading">Loading materials...</p>
        )}
      </div>
    </div>
  );
};

export default LessonMaterialsPage;
