import { useEffect, useState, useRef } from "react";
import SearchButton from "./buttons/SearchButton";
import Recipes from "./Recipes";

const API_KEY = "092dafb03ad94ee68604e62d88d54fe0";
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const timerRef = useRef();

  useEffect(() => {
    // Чистим таймер при каждом изменении query
    clearTimeout(timerRef.current);

    // Если query пустой - не делаем запрос
    if (!query.trim()) return;

    // Ставим новый таймер
    timerRef.current = setTimeout(() => {
      fetchFood();
    }, 2000); // дебаунс

    // Cleanup функция
    return () => clearTimeout(timerRef.current);
  }, [query]);

  async function fetchFood() {
    try {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Ошибка:", error);
      setResults(null); // Сбрасываем результаты при ошибке
    }
  }
  return (
    <div className="search">
      <div className="input_form">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
          }}
          placeholder="Enter product to find recipe"
        />
        <SearchButton query={query} />
      </div>
      <h3 className="info_text">Найденные рецепты:</h3>
      {results && <Recipes results={results} />}
    </div>
  );
}
