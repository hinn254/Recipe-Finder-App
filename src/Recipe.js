import React from "react";
import "./recipe.css";

const Recipe = ({ image, calories, title, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {Math.trunc(calories)}</p>
      <img className="image" src={image} alt={title} />
    </div>
  );
};

export default Recipe;
