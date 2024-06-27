import { categories, blog, Class } from "../Data/Data"
import { NavLink } from "react-router-dom";

function CategoriesNav() {
    return (
        <>
            <div className={`${blog.subNav} `}>

                <div className={`${blog.category}`}>
                    {
                        categories.map((category, index) => {
                            return (
                                <NavLink to={category.category} className={`${blog.categoryTextStyle}`} key={category.id}>
                                    <p className={`${index === 0 ? `${blog.categoryActive}` : ``}`}>{category.category}</p>
                                </NavLink>
                            )
                        })
                    }
                </div>

                <div className={`${Class.hidden} ${blog.mdFlex}`}>
                    <div className={`${Class.flex}`}>
                        <p className={`${blog.fullPage}`}>Full Page</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default CategoriesNav