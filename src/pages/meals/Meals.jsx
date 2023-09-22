import Meal from "../../components/meal/Meal";
import { useLoaderData, useParams } from "react-router-dom";

const Meals = () => {
    
    const {meals} = useLoaderData();
    // console.log(meals);
    
    const {category = "Beef"} = useParams();
    // console.log(category);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {
            meals.map(meal => <Meal 
             key={meal.idMeal}
             meal={meal}
             category={category}
            />)
        }
    </div>
    );
};

export default Meals;