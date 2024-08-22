import React from 'react';
import './ExhibitionFileUpload.css';

const FileUpload = ({ onFileUpload }) => (
  <div className="file-upload">
    <input type="file" onChange={onFileUpload} />
  </div>
);

export default FileUpload;
