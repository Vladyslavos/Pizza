import React from "react";

export const Categories: React.FC = ({ categoryId, onChangeCategory }: any) => {
  const categories = ["All", "Meat", "Vegeterians", "Grill", "Spicy", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            className={categoryId === i ? "active" : ""}
            onClick={() => onChangeCategory(i)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
