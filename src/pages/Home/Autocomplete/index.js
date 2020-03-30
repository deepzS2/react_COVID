import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

// Styled Components
import { Input, InputField } from "./styles";

// Suggestion List Component
import SuggestionList from "./SuggestionList";

function Autocomplete({ suggestions, history }) {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setSuggestions] = useState(false);
  const [userInput, setUserInput] = useState(``);

  const handleChange = (e) => {
    const input = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filtered = suggestions.filter(
      (suggestion) =>
        suggestion.country.toLowerCase().indexOf(input.toLowerCase()) > -1
    );

    // Update input and filtered suggestions
    setActiveSuggestion(0);
    setFilteredSuggestions(filtered);
    setSuggestions(true);
    setUserInput(input);
  };

  const handleClick = (e) => {
    // Redirect to the element clicked
    history.push(`/country/${e.currentTarget.innerText}`);
  };

  const onKeyDown = (e) => {
    // Enter
    if (e.keyCode === 13) {
      // Redirect to the element selected
      history.push(`/country/${filteredSuggestions[activeSuggestion].country}`);
    } else if (e.keyCode === 38) {
      // User pressed the up arrow, decrement the index
      if (activeSuggestion === 0) {
        return;
      }

      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      // User pressed the down arrow, increment the index
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionList;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionList = (
        <>
          {filteredSuggestions.map((suggestion, index) => {
            let active = false;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              active = true;
            }

            return (
              <SuggestionList
                active={active}
                key={suggestion.country}
                onClick={handleClick}
              >
                {suggestion.country}
              </SuggestionList>
            );
          })}
        </>
      );
    } else {
      suggestionList = <SuggestionList empty>Nenhum país com esse nome encontrado...</SuggestionList>;
    }
  }

  return (
    <InputField>
      <Input
        value={userInput}
        onKeyDown={onKeyDown}
        onChange={handleChange}
        placeholder="Procure um país"
      />
      {suggestionList}
    </InputField>
  );
}

Autocomplete.propTypes = {
  suggestions: PropTypes.instanceOf(Array),
  history: PropTypes.shape().isRequired
};

Autocomplete.defaultProps = {
  suggestions: []
};

export default withRouter(Autocomplete);
