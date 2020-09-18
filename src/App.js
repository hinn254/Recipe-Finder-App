import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");

  const APP_ID = "ddecd6fe";
  const APP_KEY = "bf7938b79473e3bcd10864b69dc533df";
  const urlExample = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(urlExample);
      const Recdata = await response.json();
      setRecipes(Recdata.hits);
    };
    fetchData();
  }, [query, urlExample]);

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  if (recipes.length === 0) {
    return (
      <div className="App">
        <form className="search-form">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
            type="text"
          />
          <button onClick={getSearch} className="search-button" type="submit">
            search
          </button>
        </form>
        <div className="recipes">
          <h1>Please double check your search.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <form className="search-form">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
          type="text"
        />
        <button onClick={getSearch} className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            image={recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
