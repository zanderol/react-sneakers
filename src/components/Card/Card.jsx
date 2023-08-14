import React from "react";

import styles from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    // setIsAdded(true);
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onClickFavorite}>
        <img src="/img/heart-neutral.svg" alt="Neutral" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Price:</span>
          <b>{props.price}</b>
        </div>

        <img
          className={styles.plus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-add.svg"}
          alt="Add"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
