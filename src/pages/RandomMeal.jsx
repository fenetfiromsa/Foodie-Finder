import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        setMeal(res.data.meals[0]);
      } catch (error) {
        console.error("Error fetching random meal:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeal();
  }, []);

  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="p-4 bg-black">
      <Navbar />
      

      {loading && <p className="text-center text-gray-600 mb-4">Loading...</p>}

      {meal && (
        <div className="bg-green-100 shadow-lg rounded-2xl p-11 w-[1240px] align-items-start">
          <div className="flex gap-10 w-full">
            <div>
              <h2 className="text-3xl mb-10 font-semibold bg-green-950 px-10 py-3 rounded-2xl text-green-400 ml-4">
                {meal.strMeal}
              </h2>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="md:w-10/12 w-92 rounded mb-4 align-start object-start border-green-600 border-2 ml-4"
              />
            </div>

            <div>
              <h3 className="font-bold text-1g text-3xl mb-5 text-green-400 bg-green-950 px-10 py-3 rounded-2xl">
                Ingredients:
              </h3>
              <ul className="list-disc list-inside mb-4 border-green-600 mt-10 text-2xl shadow-1g p-12 bg-green-400 font-serif rounded-2xl">
                {getIngredients().map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-10">
            <div>
              <h3 className="font-bold text-1g text-3xl mb-5 text-green-400 bg-green-950 px-10 py-3 rounded-2xl">
                Instructions:
              </h3>
              <p className="mb-4 whitespace-pre-line border-green-600 mt-10 text-2xl shadow-1g p-12 bg-green-400 font-serif rounded-2xl">
                {meal.strInstructions}
              </p>
            </div>
            {meal.strYoutube && (
              <div>
                <h3 className="font-bold text-1g text-3xl  text-green-400 bg-green-950 px-10 py-3 rounded-2xl mb-10">
                  YouTube Tutorial:
                </h3>
                <iframe
                  title="meal-video"
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
                  allowFullScreen
                  className="rounded p-10 bg-green-400 border-green-950 border-2 w-96"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default RandomMeal;
