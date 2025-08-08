import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        // Filter out Goat and Breakfast
        const filtered = data.categories.filter(
          (cat) => cat.strCategory !== "Goat" && cat.strCategory !== "Breakfast"
        );
        setCategories(filtered);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-red-600 text-center m-10 text-5xl">
        Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-white-100 mb-20">
        {categories.map((cat) => (
          <div
            key={cat.idCategory}
            className="w-full h-[200px] bg-gray-200 flex flex-col items-center justify-center rounded-lg shadow-lg overflow-hidden"
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
    </div>
  );
}
