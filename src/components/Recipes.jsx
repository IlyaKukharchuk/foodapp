import RecipeItem from "./RecipeItem";

export default function Recipes({ results }) {
  return (
    <div className="recipes">
      {results.map((recipe, i) => (
        <RecipeItem recipe={recipe} key={i} />
      ))}
    </div>
  );
}
