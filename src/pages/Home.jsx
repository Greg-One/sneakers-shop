import React from 'react';

import { Card } from '../components/Card';

export function Home({
  items,
  searchValue,
  setSearchValue,
  handleSearchInputChange,
  handleCartAdd,
  handleCardLike,
  isLoading,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        onClickAdd={(obj) => handleCartAdd(obj)}
        onClickLike={(obj) => handleCardLike(obj)}
        key={index}
        loading={isLoading}
        {...item}
      />
    ));
  };

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
      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}
