import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import RecipeTodoList from "./RecipeTodoList"

function App() {
  const [recipes, setRecipes] = useState(RecipeData); 
 
  // Functions of State => Grabbing existing recipes and combining newRecipes
  const createNewRecipes = (newRecipes) => {
    setRecipes([
      ...recipes, newRecipes
    ])
  }
  
  // Handler => Delete btn
  const deleteRecipe = (del) => {
     const filter = recipes.filter((recipe, index) => {return del !== index})
     setRecipes(filter)
    
  }
  
  // Webpage return 
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate 
        createNewRecipes={createNewRecipes}
      />
     
    </div>
  );
}

export default App;