import React from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Drawer } from './components/Drawer';

const cardsArray = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    image: '/img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    image: '/img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    image: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8499,
    image: '/img/sneakers/4.jpg',
  },
];

export function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <div className="wrapper">
      <Header onClickCart={() => setCartOpened(true)} />
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <div className="content">
        <div className="title">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />

            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {cardsArray.map((card) => (
            <Card title={card.title} price={card.price} image={card.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
