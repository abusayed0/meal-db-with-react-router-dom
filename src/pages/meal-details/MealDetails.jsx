import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
    const { meals } = useLoaderData();
    console.log(meals);

    const { idMeal, strCategory, strMeal, strInstructions, strMealThumb } = meals[0];
    return (
        <div className="mt-10 border p-5">
            <img className="w-full h-[500px]" src={strMealThumb} alt="" />
            <div className="mt-5 flex flex-col gap-3">
                <h2 className="text-3xl">Name : {strMeal}</h2>
                <h3 className="text-2xl">Category : {strCategory}</h3>
                <p className="text-xl">Id : {idMeal}</p>
                <p>Instruction : {strInstructions}</p>
            </div>
        </div>
    );
};

export default MealDetails;