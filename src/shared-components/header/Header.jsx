import { useEffect, useState } from "react";
import Category from "../../components/category/Category";

const Header = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, [])
    // console.log(categories);
    return (
        <nav className="mt-12 flex justify-center gap-5 flex-wrap">
            {
                categories.map(category => <Category
                 key={category.idCategory}
                 category={category}
                 
                 
                />)
            }
        </nav>
    )     
};

export default Header;