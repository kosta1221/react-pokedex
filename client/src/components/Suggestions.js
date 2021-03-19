import React from "react";

const Suggestions = ({ suggestions }) => {
	const options = suggestions.map((suggestion, i) => <li key={`suggestion-${i}`}>{suggestion}</li>);
	return <ul>{options}</ul>;
};

export default Suggestions;
