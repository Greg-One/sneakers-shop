import React from 'react';
import styles from './Card.module.scss';

export function Card({ title, image, price, onClickLike, onClickAdd }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const handlePlusClick = () => {
    onClickAdd({ title, image, price });
    setIsAdded(!isAdded);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <article className={styles.card}>
      <button className={styles.like} onClick={handleLikeClick}>
        <img
          src={isLiked ? '/img/like-enabled.svg' : '/img/like-disabled.svg'}
          alt="Like"
        />
      </button>

      <img width={133} height={112} src={image} alt="sneakers" />
      <h5>{title}</h5>
      <div className={styles.content}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button
          onClick={handlePlusClick}
          className={isAdded ? styles.plus : ''}
        >
          <img
            src={isAdded ? '/img/plus-checked.svg' : '/img/plus.svg'}
            alt="Add item"
          />
        </button>
      </div>
    </article>
  );
}
