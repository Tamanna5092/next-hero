"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
      setError("");
    } catch (error) {
      setError("Something went wrong!", "No data found!");
    }
  };

  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <div>
      <div className="text-center space-x-2 my-10">
        <input
          onChange={handler}
          className="p-2 outline-none border-2 border-red-400 bg-gray-200"
          type="text"
          placeholder="Search your meals...."
        />
        <button className="p-2 bg-red-400">Search</button>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {meals?.map((meal) => (
          <div key={meal.idMeal} className="border-2 border-red-400 p-3">
            <h1 className="text-xl font-medium">{meal.strMeal}</h1>
            <Image src={meal?.strMealThumb} alt={meal.idMeal} width={200} height={200} />
            <p>{meal.strInstructions.slice(0, 500)}</p>
          </div>
        ))}
        {error && <p className="text-center text-red-400">{error}</p>}
      </div>
    </div>
  );
};

export default Meals;
