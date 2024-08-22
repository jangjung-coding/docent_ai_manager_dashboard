import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLinksContainer = styled.div`
  margin-left: 3%;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  margin-right: 5px;
  cursor: pointer;
  transition: color 0.3s ease; 

  &:hover {
    color: #b92eb7;
    font-weight: bold;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const HeaderLinks = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <HeaderLinksContainer>
      <Span onClick={() => handleNavigate('/enrollMuseum')}>전시회 등록</Span>
      <Span>ㅣ</Span>
      <Span onClick={() => handleNavigate('/surveyResult')}>설문 조사 결과</Span>
    </HeaderLinksContainer>
  );
};

export default HeaderLinks;
