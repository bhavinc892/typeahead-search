import React from "react";

function Suggestions(props) {
  const { suggestions, dataKey, onSuggestionClick, highlight } = props;

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index} className="text-blue-500">
              {part}
            </b>
          ) : (
            part
          );
        })}
      </span>
    );
  };
  return (
    <li>
      {suggestions.map((suggestion) => (
        <p
          key={suggestion.id}
          className="p-2 cursor-pointer"
          onClick={() => {
            onSuggestionClick(suggestion);
          }}
        >
          {getHighlightedText(suggestion[dataKey], highlight)}
        </p>
      ))}
    </li>
  );
}

export default Suggestions;
