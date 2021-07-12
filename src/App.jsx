import React from 'react';
import axios from 'axios';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Favorities } from './pages/Favorities';

export function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorities, setFavorities] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        'https://60e0cfc96b689e001788cbeb.mockapi.io/cart',
      );
      const favoritiesResponse = await axios.get(
        'https://60e0cfc96b689e001788cbeb.mockapi.io/favorities',
      );
      const itemsResponse = await axios.get(
        'https://60e0cfc96b689e001788cbeb.mockapi.io/items',
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorities(favoritiesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);
  //? try to add api class later

  const handleCartAdd = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://60e0cfc96b689e001788cbeb.mockapi.io/cart/${obj.id}`,
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id)),
        );
      } else {
        const { data } = await axios.post(
          'https://60e0cfc96b689e001788cbeb.mockapi.io/cart',
          obj,
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCartRemove = (id) => {
    axios.delete(`https://60e0cfc96b689e001788cbeb.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCardLike = async (obj) => {
    try {
      if (favorities.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://60e0cfc96b689e001788cbeb.mockapi.io/favorities/${obj.id}`,
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

  return (
    <div className="wrapper">
      <Header onClickCart={() => setCartOpened(true)} />
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onCartRemove={handleCartRemove}
        />
      )}

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
        <Favorities items={favorities} handleCardLike={handleCardLike} />
      </Route>
    </div>
  );
}
