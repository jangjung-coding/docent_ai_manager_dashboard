import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnrollMuseumPage.css';
import HeaderLinks from '../componenets/HeaderLinks';

function ExhibitionList() {
  const [exhibitions, setExhibitions] = useState([
    { name: '반 고흐 특별 전시회', period: '2024.07.04~09.01', status: '등록 완료' },
    // ... 다른 전시회 정보
  ]);

  const navigate = useNavigate();

  const handleAddExhibition = () => {
    setExhibitions([
      ...exhibitions,
      { name: '', period: '', status: '등록 대기' } // 새로운 빈 전시회 항목
    ]);
  };

  const handleDeleteExhibition = (index) => {
    setExhibitions(exhibitions.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newExhibitions = [...exhibitions];
    newExhibitions[index] = { ...newExhibitions[index], [field]: value };
    setExhibitions(newExhibitions);
  };

  const handleRegisterClick = () => {
    navigate('/enrollPainting');
  };

  return (
    <div>
      <HeaderLinks />
      <div className="exhibition-list">
        <table>
          <thead>
            <tr>
              <th>전시회 명</th>
              <th>기간</th>
              <th>등록 상태</th>
              <th>작품 등록</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {exhibitions.map((exhibition, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={exhibition.name}
                    onChange={(e) => handleChange(index, 'name', e.target.value)}
                    placeholder="전시회 명"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={exhibition.period}
                    onChange={(e) => handleChange(index, 'period', e.target.value)}
                    placeholder="기간"
                  />
                </td>
                <td>{exhibition.status}</td>
                <td>
                  <button className="register-button" onClick={handleRegisterClick}>
                    작품 등록하기
                  </button>
                </td>
                <td>
                  <button 
                    className="delete-button" 
                    onClick={() => handleDeleteExhibition(index)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-exhibition" onClick={handleAddExhibition}>
          전시회 추가하기
        </button>
      </div>
    </div>
  );
}

export default ExhibitionList;
