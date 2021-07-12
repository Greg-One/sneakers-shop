import React from 'react';
import styles from './Card.module.scss';

export function Card({
  id,
  title,
  image,
  price,
  onClickLike,
  onClickAdd,
  liked = false,
  added = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isLiked, setIsLiked] = React.useState(liked);

  const handlePlusClick = () => {
    onClickAdd({ id, title, image, price });
    setIsAdded(!isAdded);
  };

  const handleLikeClick = () => {
    onClickLike({ id, title, image, price });
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
