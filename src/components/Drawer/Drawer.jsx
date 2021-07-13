import React from 'react';
import axios from 'axios';
import { AppContext } from '../../context';
import { Info } from '../Info';
import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function Drawer({ items = [], onClose, onCartRemove }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleOrderClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://60e0cfc96b689e001788cbeb.mockapi.io/orders',
        { items: cartItems },
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          'https://60e0cfc96b689e001788cbeb.mockapi.io/cart/' + item.id,
        );
        await delay(1000);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2>Корзина</h2>
          <button onClick={onClose}>
            <img src="/img/remove.svg" alt="Remove" />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((item) => {
                return (
                  <div className={styles.item} key={item.id}>
                    <img
                      width={70}
                      height={70}
                      src={item.image}
                      alt="Sneakers"
                    />
                    <div className={styles.info}>
                      <p>{item.title}</p>
                      <b>{item.price} руб.</b>
                    </div>
                    <button onClick={() => onCartRemove(item.id)}>
                      <img src="/img/remove.svg" alt="Remove" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className={styles.block}>
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={handleOrderClick}
                className={styles.buttonGreen}
              >
                Оформить заказ
                <img src="/img/cart-forward-arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            image={
              isOrderComplete ? '/img/purchased.png' : '/img/cart-empty.jpg'
            }
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
          />
        )}
      </div>
    </div>
  );
}
