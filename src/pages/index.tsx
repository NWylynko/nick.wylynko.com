import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

interface Props {
  
}

const Index = (props: Props) => {
  return (
    <div>
      <Title>Hello World</Title>
      <Link to="/second" >to second page</Link>
    </div>
  )
}

const Title = styled.h1`
  color: red;
`;

export default Index