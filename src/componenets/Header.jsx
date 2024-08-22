import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="header-title" onClick={handleNavigate}>
        PEŘCENT
      </div>
      <div className="header">
        <div className="header-links">
          <span>로그인</span>
          <span>ㅣ</span>
          <span>마이페이지</span>
          <span>ㅣ</span>
          <span>고객센터</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
