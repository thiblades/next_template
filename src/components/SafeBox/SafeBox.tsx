import React, { ReactNode } from 'react'
import { Container } from './SafeBox.styles'


const SafeBox: React.FC = ({ children } ) => (
  <Container>
    {children}
  </Container>
);


export default SafeBox;
