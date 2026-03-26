import "./category-item.styles.scss";

const CategoryItem = ({ image, name, description, link }) => {
  return (
    <div
      className="category"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="category_body">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          <a href={link}>Buy Now</a>
        </p>
      </div>
    </div>
  )
}

export default CategoryItem