import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Categories = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map(({ id, name, description, link, image }) => (
        <CategoryItem
          key={id}
          name={name}
          description={description}
          link={link}
          image={image}
        />
      ))}
    </div>
  );
};

export default Categories;