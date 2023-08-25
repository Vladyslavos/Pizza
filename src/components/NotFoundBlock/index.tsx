import React from "react";
import NotFound from "../../pages/NotFound";
import styles from "../NotFoundBlock/NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Not found
    </h1>
  );
};

export default NotFoundBlock;
