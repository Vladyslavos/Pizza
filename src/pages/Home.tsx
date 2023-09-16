import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../skeleton/Sketelon";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectFilter,
  selectSearchValue,
  selectSortProperty,
} from "../redux/slices/filter/selectrors";
import { setCategoryId } from "../redux/slices/filter/slice";
import { setCurrentPage } from "../redux/slices/filter/slice";
import { selectPizza } from "../redux/slices/pizza/selectors";
import { fetchPizzas } from "../redux/slices/pizza/asyncAction";
import { useAppDispatch } from "../redux/store";
import { animation } from "../animation/animation";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  const { items, status } = useSelector(selectPizza);
  const dispatch = useAppDispatch();
  const categoryId = useSelector(selectFilter);
  const sortType = useSelector(selectSortProperty);
  const currentPage = useSelector(selectCurrentPage);
  const searchValue = useSelector(selectSearchValue);

  const onChangePage = React.useCallback((e: number) => {
    dispatch(setCurrentPage(e));
  }, []);
  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const pizzaMap = items
    .filter((el: any) => {
      if (el.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .map((el: any) => <PizzaBlock {...el} key={el.id} />);

  //Fetch code starts
  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, currentPage, searchValue]);

  const getPizzas = async () => {
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : "";

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        searchValue,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      className="container"
      initial="hidden"
      whileInView="visible"
      custom={2}
      variants={animation}
      viewport={{ once: true }}
    >
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Error happend 😕</h2>
          <p>
            Unfortunately, it was not possible to download pizzas. Please try
            again Later.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzaMap}
        </div>
      )}

      <Pagination value={currentPage} onChangePage={onChangePage} />
    </motion.div>
  );
};

export default Home;
