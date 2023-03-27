const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById(`ingredients`);

function createIngredientItem(ingredient) {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item");
  return ingredientItem;
}

const ingredientItems = ingredients.map(createIngredientItem);

ingredientsList.append(...ingredientItems);
