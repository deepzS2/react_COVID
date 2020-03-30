/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";

import { Container, Body } from "./styles";

export default function Cards({ number, text }) {
  const [active, setActive] = useState(true);

  const handleSensor = (isVisible, start) => {
    if (isVisible) {
      if (active) {
        start();
      }

      setActive(false);
    }
  };

  return (
    <Body>
      <CountUp start={0} end={number} duration={4}>
        {({ countUpRef, start }) => (
          <VisibilitySensor
            onChange={(isVisible) => {
              handleSensor(isVisible, start);
            }}
            active={active}
            delayedCall
          >
            <Container>
              <h2 ref={countUpRef} />
              <h4>{text}</h4>
            </Container>
          </VisibilitySensor>
        )}
      </CountUp>
    </Body>
  );
}

Cards.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};
