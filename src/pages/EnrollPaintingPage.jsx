// 통신하세요

import React, { useState } from 'react';
import './EnrollPaintingPage.css';
import HeaderLinks from '../componenets/HeaderLinks';
import FileUpload from '../componenets/ExhibitionFileUpload';
import ArtworkForm from '../componenets/ArtworkForm';

const ExhibitionForm = () => {
  const [artworks, setArtworks] = useState([{ id: 1 }]);
  const [formData, setFormData] = useState({});

  const handleFileUpload = (event, index) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`file_${index}`]: file,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleAddArtwork = () => {
    setArtworks((prevArtworks) => [
      ...prevArtworks,
      { id: prevArtworks.length + 1 },
    ]);
  };

  const handleRemoveArtwork = (index) => {
    setArtworks((prevArtworks) => prevArtworks.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    fetch('/api/upload', {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        console.log('Success:', response);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <HeaderLinks />
      <div className="exhibition-form">
        <h2>작품 정보</h2>
        {artworks.map((artwork, index) => (
          <ArtworkForm
            key={artwork.id}
            index={index}
            onFileUpload={handleFileUpload}
            onInputChange={handleInputChange}
            onRemoveArtwork={handleRemoveArtwork}
          />
        ))}
        <button type="button" onClick={handleAddArtwork}>
          작품 추가하기
        </button>

        <div className="map-upload-section">
          <h2>전시회 지도</h2>
          <FileUpload onFileUpload={(e) => handleFileUpload(e, 'map')} />
        </div>

        <button type="button" onClick={handleSubmit}>
          완료
        </button>
      </div>
    </div>
  );
};

export default ExhibitionForm;