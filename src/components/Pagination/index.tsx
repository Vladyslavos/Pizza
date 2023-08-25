import React from "react";
import ReactPaginate from "react-paginate";
import styles from "../Pagination/Pagination.module.scss";

interface IProps {
  value: number;
  onChangePage: (event: number) => void;
}

const Pagination: React.FC<IProps> = ({ value, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="->"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={value - 1}
      previousLabel="<-"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
