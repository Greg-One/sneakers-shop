import React from 'react';
import styles from './Card.module.scss';

export function Card(props) {
  return (
    <article className={styles.card}>
      <button className={styles.like}>
        <img src="/img/like-disabled.svg" alt="Like" />
      </button>

      <img width={133} height={112} src={props.image} alt="sneakers" />
      <h5>{props.title}</h5>
      <div className={styles.content}>
        <div className={styles.price}>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button>
          <img src="/img/plus.svg" alt="Add item" />
        </button>
      </div>
    </article>
  );
}
