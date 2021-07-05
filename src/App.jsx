import React from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Drawer } from './components/Drawer';

export function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://60e0cfc96b689e001788cbeb.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);
  //? try to add api class later

  const onCartAdd = (item) => setCartItems((prev) => [...prev, item]);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      <Header onClickCart={() => setCartOpened(true)} />
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}

      <div className="content">
        <div className="title">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : 'Все кроссовки'}
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
                onClickAdd={() => onCartAdd(item)}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
