import { useEffect, useState } from "react";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals.slice(0, 9)); 
        }
      })
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-center text-4xl font-bold text-red-600 mb-8">
        Featured Meals
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-[200px] object-cover"
            />
            <h3 className="p-4 text-lg font-semibold text-center">
              {meal.strMeal}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
