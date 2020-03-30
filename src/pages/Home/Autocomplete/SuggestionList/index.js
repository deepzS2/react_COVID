import React from 'react';
import PropTypes from 'prop-types';

import { Container, Suggestion } from './styles';

export default function SuggestionList({
 children, empty, active, onClick
}) {
  if (empty) {
    return (
      <Container>
        <Suggestion empty>
          <em>{children}</em>
        </Suggestion>
      </Container>
    );
  }

  return (
    <Container active={active} onClick={onClick}>
      <Suggestion>
        {children}
      </Suggestion>
    </Container>
  );
}

SuggestionList.propTypes = {
  children: PropTypes.node,
  empty: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

SuggestionList.defaultProps = {
  children: {},
  empty: false,
  active: false,
  onClick: () => {}
};
