export default function RecipeButton({
  showDescription,
  setShowDescription,
  setId,
  recipeId,
}) {
  return (
    <button
      className="recipe_btn"
      onClick={() => {
        setShowDescription(!showDescription);
        setId(recipeId);
      }}
    >
      {showDescription ? " Hide recipe" : "View recipe"}
    </button>
  );
}
