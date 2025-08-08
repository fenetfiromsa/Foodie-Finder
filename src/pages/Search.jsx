import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Search() {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name"); // "name" or "ingredient"
  const [meals, setMeals] = useState([]);

  const handleSearch = () => {
    if (!query.trim()) return;

    const url =
      searchType === "name"
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        : `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []); // handle no results
      })
      .catch((err) => console.error("Error fetching meals:", err));
  };

  return (
    <div className="p-10 bg-black">
        <Navbar />
      <h1 className="text-center text-4xl font-bold text-red-600 mb-8">
        Search Meals
      </h1>

      {/* Search controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder={`Search by ${searchType}`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-400 rounded-lg p-3 w-full md:w-1/3"
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border border-gray-400 rounded-lg p-3"
        >
          <option value="name">By Name</option>
          <option value="ingredient">By Ingredient</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
        >
          Search
        </button>
      </div>

      {/* Search results */}
      {meals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-[200px] object-cover"
              />
              <h3 className="p-4 text-lg font-semibold">{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      ) : (
        query && <p className="text-center text-gray-600">No meals found.</p>
      )}
      <Footer />
    </div>
  );
}
