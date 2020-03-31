/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { useCountUp } from "react-countup";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";

import { Container, Body } from "./styles";

export default function Cards({ number, text }) {
  const [active, setActive] = useState(true);
  const { countUp, start } = useCountUp({
    start: 0,
    end: number,
    duration: 4
  });

  const handleSensor = (isVisible, startFunc) => {
    if (active && isVisible) {
      startFunc();
      setActive(false);
    }
  };

  return (
    <Body>
      <VisibilitySensor
        onChange={(isVisible) => {
          handleSensor(isVisible, start);
        }}
        active={active}
        delayedCall
      >
        <Container>
          <h2>{countUp}</h2>
          <h4>{text}</h4>
        </Container>
      </VisibilitySensor>
    </Body>
  );
}

Cards.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
