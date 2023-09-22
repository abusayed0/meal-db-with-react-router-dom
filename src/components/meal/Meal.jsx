import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal, category }) => {
    // console.log(meal);
    const { strMealThumb, strMeal, idMeal } = meal;
    const navigate = useNavigate();
    return (
        <div className="border p-4 text-center">
            <img className="h-[200px] object-cover w-full" src={strMealThumb} alt="" />
            <div className="mt-3">
                <h3>{strMeal}</h3>
                <button onClick={() => navigate(`/${category}/${idMeal}`)} className="mt-2 px-4 py-2 border bg-red-600 font-semibold text-white">Details</button>
            </div>
        </div>
    );
};

export default Meal;