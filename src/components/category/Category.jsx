import { NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
const Category = ({category}) => {
   
    return (
        <NavLink to={`/${category.strCategory}`}  className={({isActive})=> isActive ? "text-xl font-medium bg-red-600 px-4 py-2" : "text-xl font-medium border 6order-red-800 px-4 py-2"}>
           {category.strCategory}
        </NavLink>
    );
};
Category.propTypes = {
    category : PropTypes.object.isRequired
};
export default Category;