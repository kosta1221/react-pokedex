import React from "react";
import "../styles/Suggestions.css";

const Suggestions = ({ suggestions }) => {
	const options = suggestions.map((suggestion, i) => (
		<div className="suggestion" key={`suggestion-${i}`}>
			{suggestion}
		</div>
	));
	return <div className="suggestions">{options}</div>;
};

export default Suggestions;
