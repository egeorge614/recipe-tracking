import React, { useState } from "react";

function RecipeCreate({ setRecipes, recipes, createNewRecipes }) {
  const initalFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState(initalFormState);
  
  
  const inputTextHandler = ({ target }) => {
    setFormData({
      ...formData, [target.name]: target.value,
    })
  };
  
  const submitCreateHandler = (event) => {
    event.preventDefault()
    createNewRecipes(formData)
    const errors = validateForm(formData);
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
      element.style.display = "none";
    }
  
    Object.keys(errors).forEach((key) => {
      const errorElement = document.querySelector(`#${key}-form .error`);
      errorElement.innerHTML = errors[key];
      errorElement.style.display = "block";
    });

    setFormData(initalFormState)
   };
  
  function validateExists(value){
    return value && value.trim()
  }

  function validateForm(formData){
    const errors = {};

    if (!validateExists(formData.get("name"))){
      errors.name = "Please enter a name"
    }
    if (!validateExists(formData.get("cuisine"))){
      errors.name = "Please enter a cuisine"
    }if (!validateExists(formData.get("photo"))){
      errors.name = "Please enter a photo"
    }
    if (!validateExists(formData.get("ingredients"))){
      errors.name = "Please enter ingredients"
    }
    if (!validateExists(formData.get("preparation"))){
      errors.name = "Please enter a preparation"
    }
    return errors;
  }
  
 
  return (
    <form name="create">
      <table>
        <tbody>
          <tr> 
            <td> 
              <input 
                onChange={inputTextHandler}
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                required
              />
            </td>
            <td> 
              <input 
                onChange={inputTextHandler}
                type="text"
                name="cuisine"
                value={formData.cuisine}
                placeholder="Cuisine"
                required
              /> 
            </td>
            <td> 
              <input 
                onChange={inputTextHandler}
                type="text"
                name="photo"
                value={formData.photo}
                placeholder="URL"
                required
              />
            </td>
            <td>
              <textarea 
                onChange={inputTextHandler}
                name="ingredients"
                value={formData.ingredients}
                placeholder="Ingredients"
                required
              />
            </td>
            <td>
              <textarea 
                onChange={inputTextHandler}
                name="preparation"
                value={formData.preparation}
                placeholder="Preparation"
                required
              />
            </td>
            <td>
              <button onClick={submitCreateHandler} type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
