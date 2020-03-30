/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import CountUp from 'react-countup';
import PropTypes from "prop-types";
import VisibilitySensor from 'react-visibility-sensor';

import Container from "./styles";

export default function Counter({ end, suffix, duration }) {
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
    <Container>
      <CountUp start={0} end={end} suffix={suffix} duration={duration}>
        {({ countUpRef, start }) => (
          <VisibilitySensor
            onChange={(isVisible) => {
                handleSensor(isVisible, start);
              }}
            active={active}
            delayedCall
          >
            <h2 ref={countUpRef} className={`number ${suffix.trim()}`} />
          </VisibilitySensor>
          )}
      </CountUp>
    </Container>
  );
}

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  suffix: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
};
