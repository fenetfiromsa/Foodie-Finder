import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.categories.filter(
          (cat) => cat.strCategory !== "Goat" && cat.strCategory !== "Breakfast"
        );
        setCategories(filtered);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals))
      .catch((err) => console.error("Error fetching meals:", err));
  };

  return (
    <div className="bg-black">
        <Navbar />
      <h1 className="font-bold text-red-600 text-center m-10 text-5xl">
        Categories
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-white-100 mb-10">
        {categories.map((cat) => (
          <div
            key={cat.idCategory}
            className="w-full h-[200px] bg-gray-200 flex flex-col items-center justify-center rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleCategoryClick(cat.strCategory)}
          >
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="w-full h-[150px] object-cover"
            />
            <h1 className="text-black text-lg font-semibold mt-2">
              {cat.strCategory}
            </h1>
          </div>
        ))}
      </div>

      {/* Meals Display */}
      {selectedCategory && (
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Meals in {selectedCategory}
          </h2>
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
        </div>
      )}
      <Footer />
    </div>
  );
}
