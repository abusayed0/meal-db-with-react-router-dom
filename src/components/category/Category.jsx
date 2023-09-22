import { NavLink, useLocation} from "react-router-dom";

const Category = ({category}) => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <NavLink to={`/${category.strCategory}`}  className={({isActive})=> isActive ? "text-xl font-medium bg-red-600 px-4 py-2" : "text-xl font-medium border 6order-red-800 px-4 py-2"}>
           {category.strCategory}
        </NavLink>
    );
};

export default Category;