export default function SearchButton({ query }) {
  function handleSearch() {
    console.log("Searching for", query, "...");
  }
  return (
    <button onClick={handleSearch} className="btn">
      Search
    </button>
  );
}
