import React from 'react';
import axios from 'axios';

import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorities } from './pages/Favorities';
import { AppContext } from './context';
import { Orders } from './pages/Orders';

export function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorities, setFavorities] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const [cartResponse, favoritiesResponse, itemsResponse] =
          await Promise.all([
            axios.get('https://60e0cfc96b689e001788cbeb.mockapi.io/cart'),
            axios.get('https://60e0cfc96b689e001788cbeb.mockapi.io/favorities'),
            axios.get('https://60e0cfc96b689e001788cbeb.mockapi.io/items'),
          ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorities(favoritiesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  //? try to add api class later

  const handleCartAdd = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id)),
        );
        await axios.delete(
          `https://60e0cfc96b689e001788cbeb.mockapi.io/cart/${obj.id}`,
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post(
          'https://60e0cfc96b689e001788cbeb.mockapi.io/cart',
          obj,
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartRemove = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      await axios.delete(
        `https://60e0cfc96b689e001788cbeb.mockapi.io/cart/${id}`,
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardLike = async (obj) => {
    try {
      if (favorities.find((item) => Number(item.id) === Number(obj.id))) {
        await axios.delete(
          `https://60e0cfc96b689e001788cbeb.mockapi.io/favorities/${obj.id}`,
        );
        setFavorities((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id)),
        );
      } else {
        const { data } = await axios.post(
          'https://60e0cfc96b689e001788cbeb.mockapi.io/favorities',
          obj,
        );
        setFavorities((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const getAddedItems = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorities,
        getAddedItems,
        handleCardLike,
        setCartOpened,
        setCartItems,
        handleCartAdd,
      }}
    >
      <div className="wrapper">
        <Header onClickCart={() => setCartOpened(true)} />
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onCartRemove={handleCartRemove}
          opened={cartOpened}
        />
        <Route exact path="/">
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearchInputChange={handleSearchInputChange}
            handleCartAdd={handleCartAdd}
            handleCardLike={handleCardLike}
            isLoading={isLoading}
          />
        </Route>

        <Route exact path="/favorities">
          <Favorities />
        </Route>

        <Route exact path="/orders">
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}
