import Meals from "@/components/Meals";
import React from "react";
import style from './styles.module.css'

export const metadata = {
  title: {
    absolute: "Meals",
  },
  description: "Meals page",
};

const MealsPage = () => {
  return (
    <div className="my-10">
      <div className="text-center space-y-2">
          <h1 className="text-2xl font-medium">Choose Your Meals</h1>
          <p className={`${style.font_tomato} ${style.text_color}`}>Choose your favourte meals by searching</p>
      </div>
        <Meals></Meals>
    </div>
  );
};

export default MealsPage;
