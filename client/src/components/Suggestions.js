import React from "react";

const Suggestions = ({ suggestions, setInputValue, handleSearchButtonClick }) => {
	const handleSuggestionClick = (event) => {
		setInputValue(event.target.innerText);
		handleSearchButtonClick();
	};

	const options = suggestions.map((suggestion, i) => (
		<div className="suggestion" key={`suggestion-${i}`} onClick={handleSuggestionClick}>
			{suggestion}
		</div>
	));
	return <div className="suggestions">{options}</div>;
};

export default Suggestions;
