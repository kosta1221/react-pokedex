import React from "react";

const Suggestions = ({ suggestions, setInputValue }) => {
	const handleSuggestionClick = (event) => {
		setInputValue(event.target.innerText);
	};

	const options = suggestions.map((suggestion, i) => (
		<div className="suggestion" key={`suggestion-${i}`} onClick={handleSuggestionClick}>
			{suggestion}
		</div>
	));
	return <div className="suggestions">{options}</div>;
};

export default Suggestions;
