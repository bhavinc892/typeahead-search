import React from "react";

function Recipe(props) {
  const { recipe } = props;
  return (
    <React.Fragment>
      {recipe ? (
        <div className="mt-8 border border-black p-2 flex flex-col items-center ">
          <h1 className="font-bold text-2xl">{recipe.name}</h1>
          <img src={recipe.image} alt={recipe.name} className="h-50 w-50" />
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default Recipe;
