import React from "react";

interface IProps {
  categoryId: number;
  onChangeCategory: (i: number) => void;
}

export const Categories: React.FC<IProps> = React.memo(
  ({ categoryId, onChangeCategory }) => {
    const categories = [
      "All",
      "Meat",
      "Vegeterians",
      "Grill",
      "Spicy",
      "Closed",
    ];

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
  }
);

export default Categories;
