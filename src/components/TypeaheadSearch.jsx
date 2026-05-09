import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Suggestions from "./Suggestions";
import { debounce } from "../helpers/debounce";

function TypeaheadSearch(props) {
  const {
    placeholder,
    onChange,
    getSuggestions,
    customStyles,
    dataKey,
    onSelect,
  } = props;
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isSelecting = useRef(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value);
  };

  const fetchSuggestions = useCallback(async (query) => {
    setLoading(true);
    setError("");
    try {
      let result;
      if (getSuggestions) {
        result = await getSuggestions(query);
      }
      setSuggestions(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [getSuggestions]);

  const debouncedFetchSuggestions = useMemo(
    () =>
      debounce((query) => {
        fetchSuggestions(query);
      }, 500),
    [fetchSuggestions],
  );

  useEffect(() => {
    if (isSelecting.current) {
      isSelecting.current = false;
      return;
    }
    if (inputValue.length > 1) {
      debouncedFetchSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue, debouncedFetchSuggestions]);

  const handleSuggestionClick = (suggestion) => {
    isSelecting.current = true;
    setInputValue(dataKey ? suggestion[dataKey] : suggestion);
    onSelect(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="w-100 mt-8">
      <input
        style={customStyles}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 || loading || error ? (
        <ul className="border border-black p-2 h-80 overflow-y-auto">
          {error && <div className="text-red-600">{error}</div>}
          {loading && <div className="p-2">Loading...</div>}
          <Suggestions
            dataKey={dataKey}
            highlight={inputValue}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
          />
        </ul>
      ) : null}
    </div>
  );
}

export default TypeaheadSearch;
