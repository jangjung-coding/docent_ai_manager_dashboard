import React from 'react';
import InputField from './InputField';
import './SignupForm.css';

const SignupForm = ({ toggleForm }) => {
  return (
    <form className="signup-form">
      <h2>회원가입</h2>
      <InputField label="이메일" type="email" placeholder="이메일을 입력하세요" />
      <InputField label="비밀번호" type="password" placeholder="8글자 이상, 영문, 숫자, 특수문자" />
      <InputField label="비밀번호 재확인" type="password" placeholder="" />
      <InputField label="성함" placeholder="" />
      <InputField label="주민등록번호" placeholder="" extraInputs={[""]} />
      <InputField label="전화번호" placeholder="" />
      <InputField label="소속" placeholder="" />
      <InputField label="직업" placeholder="미술관 운영자" />
      <button type="submit" className="submit-button" onClick={toggleForm}>완료</button>
    </form>
  );
};

export default SignupForm;
