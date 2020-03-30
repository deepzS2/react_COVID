import React from "react";

import { Container, Loader } from "./styles";

export default function Loading() {
  return (
    <Container>
      <Loader>
        <i className="fa fa-cog fa-spin" />
      </Loader>
    </Container>
  );
}
