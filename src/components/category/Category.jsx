import { NavLink, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';
const Category = ({category}) => {
const {strCategory} = category;
const location = useLocation();
    return (
        <NavLink to={`/${strCategory}`}  className={({isActive})=> isActive || (location.pathname === '/' && strCategory === "Beef") ? "text-xl font-medium bg-red-600 px-4 py-2" : "text-xl font-medium border 6order-red-800 px-4 py-2"}>
           {strCategory}
        </NavLink>
    );
};
Category.propTypes = {
    category : PropTypes.object.isRequired
};
export default Category;