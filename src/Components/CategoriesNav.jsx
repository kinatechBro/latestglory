import { categories, blog, Class } from "../Data/Data"
import { Link } from "react-router-dom";

function CategoriesNav() {
    return (
        <>
            <div className={`${blog.subNav} `}>

                <div className={`${blog.category}`}>
                    {
                        categories.map((category, index) => {
                            return (
                                <Link to={category.category} className={`${blog.categoryTextStyle}`}>
                                    <p className={`${index === 0 ? `${blog.categoryActive}` : ``}`}>{category.category}</p>
                                </Link>
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