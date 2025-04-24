import RecipeButton from "./buttons/RecipeButton";

export default function RecipeItem({ recipe }) {
  return (
    <div className="recipe">
      <div className="recipe_block first">
        <img src={recipe.image} alt={`photo of ${recipe.title}`} />
      </div>
      <div className="recipe_block second">
        <p>{recipe.title}</p>
        <RecipeButton />
      </div>
    </div>
  );
}
