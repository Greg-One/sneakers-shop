import React from 'react';
import { AppContext } from '../../context';
import styles from './Info.module.scss';

export function Info({ image, title, description }) {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className={styles.empty}>
      <img src={image} alt="Cart state logo" />
      <h3 className={styles.emptyTitle}>{title}</h3>
      <p className={styles.emptySubtitle}>{description}</p>
      <button
        onClick={() => setCartOpened(false)}
        className={styles.buttonGreen}
      >
        <img src="/img/cart-back-arrow.svg" alt="Arrow" /> Вернуться назад
      </button>
    </div>
  );
}
