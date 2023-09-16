import React from "react";
import { animation } from "../animation/animation";
import { motion } from "framer-motion";

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
      <motion.div
        className="categories"
        initial="hidden"
        whileInView="visible"
        custom={2}
        variants={animation}
        viewport={{ once: true }}
      >
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
      </motion.div>
    );
  }
);

export default Categories;
