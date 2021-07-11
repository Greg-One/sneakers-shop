import React from 'react';
import { Card } from '../components/Card';

export function Home({
  items,
  searchValue,
  setSearchValue,
  handleSearchInputChange,
  handleCartAdd,
  handleCardLike,
}) {
  return (
    <div className="content">
      <div className="title">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className="search">
          <img src="/img/search.svg" alt="Search" />

          <input
            onChange={handleSearchInputChange}
            value={searchValue}
            type="text"
            placeholder="Поиск..."
          />
          {searchValue && (
            <button onClick={() => setSearchValue('')}>
              <img src="/img/remove.svg" alt="Clear text" />
            </button>
          )}
        </div>
      </div>
      <div className="sneakers">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((item, index) => (
            <Card
              title={item.title}
              price={item.price}
              image={item.image}
              onClickAdd={(item) => handleCartAdd(item)}
              onClickLike={(item) => handleCardLike(item)}
              key={index}
            />
          ))}
      </div>
    </div>
  );
}
