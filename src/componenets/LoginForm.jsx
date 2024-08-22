import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import './LoginForm.css';

const LoginForm = ({ toggleForm }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 페이지를 EnrollPage로 이동
    navigate('/enrollMuseum');
  };

  return (
    <form className="login-form">
      <h2>로그인</h2>
      <InputField label="이메일" type="email" placeholder="이메일을 입력하세요" />
      <InputField label="비밀번호" type="password" placeholder="비밀번호를 입력하세요" />
      <button type="submit" className="submit-button" onClick={handleLogin}>
        로그인
      </button>
      <button type="button" className="signup-button" onClick={toggleForm}>
        회원가입
      </button>
    </form>
  );
};

export default LoginForm;
