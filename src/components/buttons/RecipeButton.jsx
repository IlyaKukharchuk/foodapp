export default function RecipeButton({ query }) {
  function handleSearch() {
    console.log("Searching for", query, "...");
  }
  return (
    <button onClick={handleSearch} className="recipe_btn">
      View recipe
    </button>
  );
}
