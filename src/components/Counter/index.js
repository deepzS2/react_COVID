/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { useCountUp } from 'react-countup';
import PropTypes from "prop-types";
import VisibilitySensor from 'react-visibility-sensor';

import Container from "./styles";

export default function Counter({ end, suffix, duration }) {
  const [visibilityActive, setVisibilityActive] = useState(true);
  const { countUp, start } = useCountUp({
    start: 0,
    end,
    duration,
  });

  const handleSensor = (isVisible, startFunc) => {
    if (isVisible && visibilityActive) {
      startFunc();
      setVisibilityActive(false);
    }
  };

  return (
    <Container>
      <VisibilitySensor
        active={visibilityActive}
        onChange={(isVisible) => {
          handleSensor(isVisible, start);
        }}
        delayedCall
      >
        <h2 className={`number ${suffix.trim()}`}>
          {`${countUp} ${suffix}`}
        </h2>
      </VisibilitySensor>
    </Container>
  );
}

Counter.propTypes = {
  end: PropTypes.number.isRequired,
  suffix: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired
};
