import React from "react"
import RecipeData from "./RecipeData.js"
import RecipeCreate from "./RecipeCreate.js"
import RecipeList from "./RecipeList.js"

const RecipeTodoList = ({ recipe, deleteRecipe, index }) => {  
  
  return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo}/></td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td><button onClick={deleteRecipe} name="delete" type="delete">Delete</button></td>
          </tr>
        )
}

export default RecipeTodoList