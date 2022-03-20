import React from 'react';
import { Title } from '../Title/index';
import { Searcher } from '../Searcher/index';
import { Heading, Container } from './styles';

function Header() {
  return (
    <Heading>
      <Container>
        <Title type="2" content="Giff ExpertApp" />
        <Searcher />
      </Container>
    </Heading>
  );
}

export default Header;
