import { useEffect, useState } from "react";
import RecipeButton from "./buttons/RecipeButton";
import RecipeDescription from "./RecipeDescription";

export default function RecipeItem({ recipe }) {
  const [showDescription, setShowDescription] = useState(false);
  const [results, setResults] = useState(null);
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(id);
    if (showDescription && id != "") {
      fetchRecipeDescription();
    }
    setId("");
  }, [id]);

  async function fetchRecipeDescription() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/${id}/information?apiKey=${
          import.meta.env.VITE_SPOONACULAR_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Ошибка:", error);
      setResults(null); // Сбрасываем результаты при ошибке
    }
  }

  return (
    <div className="recipe">
      <div className="recipe_block first">
        <img src={recipe.image} alt={`photo of ${recipe.title}`} />
      </div>
      <div className="recipe_block second">
        <p>{recipe.title}</p>
        <RecipeButton
          setShowDescription={setShowDescription}
          showDescription={showDescription}
          setId={setId}
          recipeId={recipe.id}
        />
      </div>
      {showDescription && <RecipeDescription results={results} />}
    </div>
  );
}
