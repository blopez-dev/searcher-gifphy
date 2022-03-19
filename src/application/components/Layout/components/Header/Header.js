import React from 'react';
import { Heading, Container } from './styles';
import { Title } from '../Title/index';

function Header() {
  return (
    <Heading>
      <Container>
        <Title type="2" content="Giff ExpertApp" />
      </Container>
    </Heading>
  );
}

export default Header;
