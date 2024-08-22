import React from 'react';
import InputField from './ExhibitionInputField';
import FileUpload from '../componenets/ExhibitionFileUpload';
import '../pages/EnrollPaintingPage.css';


const ArtworkForm = ({ index, onFileUpload, onInputChange, onRemoveArtwork }) => (
  <div className="artwork-form">
    <button
      className="remove-artwork-button"
      onClick={() => onRemoveArtwork(index)}
    >
    </button>
    <div className="upload-section">
      <FileUpload onFileUpload={(e) => onFileUpload(e, index)} />
    </div>
    <div className="info-section">
      <InputField
        label="작품 번호"
        name={`artworkNumber_${index}`}
        type="text"
        onChange={onInputChange}
        placeholder="작품 번호 입력"
      />
      <InputField
        label="위치"
        name={`location_${index}`}
        type="text"
        onChange={onInputChange}
        placeholder="위치 입력"
      />
      <InputField
        label="작품명"
        name={`artworkName_${index}`}
        type="text"
        onChange={onInputChange}
        placeholder="작품명 입력"
      />
      <InputField
        label="작가명"
        name={`artistName_${index}`}
        type="text"
        onChange={onInputChange}
        placeholder="작가명 입력"
      />
      <InputField
        label="작품 설명"
        name={`artworkDescription_${index}`}
        type="textarea"
        onChange={onInputChange}
        placeholder="작품에 대한 간단한 설명을 작성해 주세요. 작품의 주요 특징, 역사적 배경 등을 포함해 주시면 됩니다."
      />
      <InputField
        label="기획 의도"
        name={`intention_${index}`}
        type="textarea"
        onChange={onInputChange}
        placeholder="작품이 전시된 이유 또는 기획 의도를 설명해 주세요. 전시의 주제와 어떻게 연관되는지 등을 작성해 주시면 됩니다."
      />
    </div>
  </div>
);

export default ArtworkForm;
