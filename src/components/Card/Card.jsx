import React from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../context';
import styles from './Card.module.scss';

export function Card({
  id,
  parentId,
  title,
  image,
  price,
  onClickLike,
  onClickAdd,
  liked = false,
  added = false,
  loading = false,
}) {
  const { getAddedItems } = React.useContext(AppContext);
  const [isLiked, setIsLiked] = React.useState(liked);
  const objData = { id, parentId: id, title, image, price };

  const handlePlusClick = () => {
    onClickAdd(objData);
  };

  const handleLikeClick = () => {
    onClickLike(objData);
    setIsLiked(!isLiked);
  };

  return (
    <article className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onClickLike && (
            <button className={styles.like} onClick={handleLikeClick}>
              <img
                src={
                  isLiked ? '/img/like-enabled.svg' : '/img/like-disabled.svg'
                }
                alt="Like"
              />
            </button>
          )}

          <img width={133} height={112} src={image} alt="sneakers" />
          <h5>{title}</h5>
          <div className={styles.content}>
            <div className={styles.price}>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onClickAdd && (
              <button
                onClick={handlePlusClick}
                className={getAddedItems(id) ? styles.plus : ''}
              >
                <img
                  src={
                    getAddedItems(parentId)
                      ? '/img/plus-checked.svg'
                      : '/img/plus.svg'
                  }
                  alt="Add item"
                />
              </button>
            )}
          </div>
        </>
      )}
    </article>
  );
}
