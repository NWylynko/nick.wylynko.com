import React from 'react'
import styled from 'styled-components';

interface Props {
  
}

const Index = (props: Props) => {
  return (
    <div>
      <Title>Hello World</Title>
    </div>
  )
}

const Title = styled.h1`
  color: red;
`;

export default Index