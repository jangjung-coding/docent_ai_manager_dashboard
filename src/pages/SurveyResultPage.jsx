import React from 'react';
import styled from 'styled-components';
import HeaderLinks from '../componenets/HeaderLinks';
import Survey from '../imgs/survey.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ResponsiveImage = styled.img`
  max-width: 80%;
  height: auto;
  margin: 0 auto;
  display: block;
`;

const SurveyResult = () => {
  return (
    <div>
      <HeaderLinks />
      <Container>
        <h1>반 고흐 미술관</h1>
        <ResponsiveImage src={Survey} alt="Survey" />
      </Container>
    </div>
  );
};

export default SurveyResult;
