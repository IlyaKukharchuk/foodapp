export default function RecipeDescription({ results }) {
  if (!results) return <div>No data, you moron!</div>;

  return (
    <div className="recipe-description">
      <div className="basic-info">
        <p>🕒 Ready in: {results.readyInMinutes} min</p>
        <p>👥 Servings: {results.servings}</p>
        <p>❤️ Health Score: {results.healthScore}</p>
        <p>💰 Price per serving: ${results.pricePerServing.toFixed(2)}</p>
      </div>

      <div className="diets">
        {results.vegetarian && <span>Vegetarian</span>}
        {results.vegan && <span>Vegan</span>}
        {results.glutenFree && <span>Gluten Free</span>}
      </div>

      <h4>Ingredients:</h4>
      <ul>
        {results.extendedIngredients.map((ing) => (
          <li key={ing.id}>
            {ing.original} - {ing.amount} {ing.unit}
          </li>
        ))}
      </ul>

      <h4>Instructions:</h4>
      <div dangerouslySetInnerHTML={{ __html: results.instructions }} />

      <a href={results.sourceUrl} target="_blank" rel="noreferrer">
        Recipe Source
      </a>
    </div>
  );
}
