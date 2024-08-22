import React, { useState } from 'react';
import './SignLoginPage.css';
import SignupForm from '../componenets/SignupForm';
import LoginForm from '../componenets/LoginForm';

const SignLogin = () => {
  const [isSignup, setIsSignup] = useState(true); // 회원가입 폼이 기본으로 표시됨

  const toggleForm = () => {
    setIsSignup(!isSignup); // true/false를 반전하여 폼을 전환
  };

  return (
    <div>
      {isSignup ? <SignupForm toggleForm={toggleForm} /> : <LoginForm toggleForm={toggleForm} />}
    </div>
  );
};

export default SignLogin;