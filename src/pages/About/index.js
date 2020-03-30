import React from "react";

import { Container, Me, Description } from "./styles";

export default function About() {
  return (
    <Container>
      <Me>
        <h1>Alan</h1>
        <h3>
          Desenvolvedor web
          {` `}
          <br />
          {` `}
          back-end e front-end
        </h3>
      </Me>
      <Description>
        <p>
          Olá, eu me chamo Alan e sou o desenvolvedor deste website, possuo
          atualmente 16 anos e domino linguagens de programação web como
          React, Node, HTML, SCSS, CSS, etc.
        </p>
      </Description>
    </Container>
  );
}
