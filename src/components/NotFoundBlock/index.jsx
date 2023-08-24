import React from "react";
import NotFound from "../../pages/NotFound";
import styles from "../NotFoundBlock/NotFoundBlock.module.scss";

export default function NotFoundBlock() {
  return (
    <h1 className={styles.root}>
      <span>😕</span>
      <br />
      Not found
    </h1>
  );
}
