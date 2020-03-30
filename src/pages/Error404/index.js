import React from 'react';

// Assets
import errorImg from '../../assets/404.svg';

import {
  Container, ErrorImg, TextDiv, Text
} from './styles';

export default function Error404() {
  return (
    <Container>
      <ErrorImg src={errorImg} />
      <TextDiv>
        <Text>
          Oops!
          <br />
          Página não encontrada ...
        </Text>
      </TextDiv>
    </Container>
  );
}
