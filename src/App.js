import React, { useState } from "react";
import axios from "axios";
import TypeaheadSearch from "./components/TypeaheadSearch";
import Recipe from "./components/Recipe";

function App() {
  const [recipe, setRecipe] = useState(null);
  const customStyles = {
    border: "2px solid black",
    padding: "8px",
    borderRadius: "4px",
    width: "100%",
  };

  const staticData = [
    "Pav Bhaji",
    "Pizza",
    "Pasta",
    "Paneer Tikka",
    "Dal Makhani",
    "Biryani",
  ];

  const getSuggestions = async (query) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/recipes/search?q=${query}`,
      );
      return response.data.recipes;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold">Typeahead Search</h1>
        <TypeaheadSearch
          staticData={staticData}
          placeholder="Search for a recipe"
          onChange={(inputValue) => {
            if (inputValue.length === 0) {
              setRecipe(null);
            }
          }}
          getSuggestions={getSuggestions}
          customStyles={customStyles}
          dataKey="name"
          onSelect={(recipe) => {
            setRecipe(recipe);
          }}
        />
        <Recipe recipe={recipe} />
      </div>
    </React.Fragment>
  );
}

export default App;
