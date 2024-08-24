// 통신하세요

import React, { useState } from 'react';
import './EnrollPaintingPage.css';
import HeaderLinks from '../componenets/HeaderLinks';
import FileUpload from '../componenets/ExhibitionFileUpload';
import ArtworkForm from '../componenets/ArtworkForm';

const ExhibitionForm = () => {
  const [artworks, setArtworks] = useState([{ id: 1 }]); // 작품 정보 관리
  const [formData, setFormData] = useState({}); // 폼 데이터 관리
  const [showPopup, setShowPopup] = useState(false); // 팝업창 상태 관리

  // 파일 업로드 핸들러: 파일을 선택하면 호출됨
  const handleFileUpload = (event, index) => {
    const file = event.target.files[0]; // 선택된 파일
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`file_${index}`]: file, // formData 상태에 파일 추가
    }));
  };

  // 폼 입력 핸들러: 입력값이 변경될 때 호출됨
  const handleInputChange = (event) => {
    const { name, value } = event.target; // 입력된 필드의 이름과 값
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // formData 상태에 입력값 추가
    }));
  };

  // 작품 추가 핸들러: "작품 추가하기" 버튼을 누르면 호출됨
  const handleAddArtwork = () => {
    setArtworks((prevArtworks) => [
      ...prevArtworks,
      { id: prevArtworks.length + 1 }, // 새로운 작품 추가
    ]);
  };

  // 작품 제거 핸들러: 특정 작품을 제거할 때 호출됨
  const handleRemoveArtwork = (index) => {
    setArtworks((prevArtworks) => prevArtworks.filter((_, i) => i !== index));
  };

  // 폼 제출 핸들러: "완료" 버튼을 누르면 호출됨
  const handleSubmit = () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]); // formData의 모든 데이터를 FormData 객체에 추가
    });

    fetch('/api/upload', {
      method: 'POST',
      body: data, // 서버로 데이터 전송
    })
      .then((response) => {
        if (response.ok) { // 응답이 성공적일 경우
          setShowPopup(true); // 팝업창 표시
        } else {
          console.error('Failed to upload:', response);
        }
      })
      .catch((error) => {
        console.error('Error:', error); // 오류 처리
      });
  };

  // "확인" 버튼 핸들러: 팝업창에서 호출되어 페이지 이동
  const handleConfirm = () => {
    window.location.href = '/enrollmuseumPage'; // /enrollmuseumPage로 이동
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

      {/* 팝업창 */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>작품 정보가 입력됐습니다</p>
            <button onClick={handleConfirm}>확인</button> {/* "확인" 버튼 */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExhibitionForm;


// const ExhibitionForm = () => {
//   const [artworks, setArtworks] = useState([{ id: 1 }]);
//   const [formData, setFormData] = useState({});

//   const handleFileUpload = (event, index) => {
//     const file = event.target.files[0];
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [`file_${index}`]: file,
//     }));
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//     console.log(formData)
//   };

//   const handleAddArtwork = () => {
//     setArtworks((prevArtworks) => [
//       ...prevArtworks,
//       { id: prevArtworks.length + 1 },
//     ]);
//   };

//   const handleRemoveArtwork = (index) => {
//     setArtworks((prevArtworks) => prevArtworks.filter((_, i) => i !== index));
//   };

//   const handleSubmit = () => {
//     const data = new FormData();
//     Object.keys(formData).forEach((key) => {
//       data.append(key, formData[key]);
//     });

//     fetch('/api/upload', {
//       method: 'POST',
//       body: data,
//     })
//       .then((response) => {
//         console.log('Success:', response);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <HeaderLinks />
//       <div className="exhibition-form">
//         <h2>작품 정보</h2>
//         {artworks.map((artwork, index) => (
//           <ArtworkForm
//             key={artwork.id}
//             index={index}
//             onFileUpload={handleFileUpload}
//             onInputChange={handleInputChange}
//             onRemoveArtwork={handleRemoveArtwork}
//           />
//         ))}
//         <button type="button" onClick={handleAddArtwork}>
//           작품 추가하기
//         </button>

//         <div className="map-upload-section">
//           <h2>전시회 지도</h2>
//           <FileUpload onFileUpload={(e) => handleFileUpload(e, 'map')} />
//         </div>

//         <button type="button" onClick={handleSubmit}>
//           완료
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ExhibitionForm;