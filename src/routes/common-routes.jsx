import { createBrowserRouter } from "react-router-dom";
import MainTem from "../templates/main/MainTem";
import Meals from "../pages/Meals/Meals";
import MealDetails from "../pages/meal-details/MealDetails";
import Error from "../pages/Error/Error";


const router = createBrowserRouter([
    {
        path : "/",
        element : <MainTem/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                loader : () => fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"),
                element : <Meals/>
            },
            {
                path : "/:category",
                loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`),
                element : <Meals/>
            },
            {
                path : "/:category/:id",
                loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
                element : <MealDetails/>
            },

        ]
    }
]);

export default router;