import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Favourites from '../Favourites/Favourites';
import Purchases from '../Purchases/Purchases';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);

  const totalPrice = addedToCart.reduce((sum, obj) => obj.price + sum, 0);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, itemsResponse] = await Promise.all([
          axios.get('https://6453548cc18adbbdfe9a5d80.mockapi.io/api/cart'),
          axios.get('https://6453548cc18adbbdfe9a5d80.mockapi.io/api/flowers'),
        ]);
        // console.log(cartResponse)
        //console.log(itemsResponse)
        setAddedToCart(cartResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setAddedToCart, setItems]);

  const handleAddToCart = (flower) => {
    console.log(flower)
    axios.post('https://6453548cc18adbbdfe9a5d80.mockapi.io/api/cart', flower).then((res) => {
      console.log(res.data)
      setAddedToCart([res.data, ...addedToCart])
    })
  }

  const handleDeleteFromCart = (flower) => {
    const del = addedToCart.find(item => item.flowerId === flower.flowerId)
    if (!del) return
    try {
      axios.delete(`https://6453548cc18adbbdfe9a5d80.mockapi.io/api/cart${flower}`)
      setAddedToCart((prev) => prev.filter((item) => item.flowerId !== del.flowerId))
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  }
  const handleCartOpenClick = () => {
    setCartOpen(true)
  }

  const isAddedflowers = (flower) => {
    return addedToCart.some(item => item.flowerId === flower.flowerId)
  }

  return (
    // <CurrentUserContext.Provider >
    <>
      <Header
        onOpenCart={handleCartOpenClick}
        totalPrice={totalPrice}
      />
      <Routes>
        <Route
          path='/flowers'
          element={<Main
            cartOpen={cartOpen}
            onClose={() => setCartOpen(false)}
            items={items}
            addedToCart={addedToCart}
            onAddToCart={handleAddToCart}
            onDeleteFromCart={handleDeleteFromCart}
            isAddedFlowers={isAddedflowers}
            totalPrice={totalPrice}
          />}
        />
        <Route
          path='/favourites'
          element={<Favourites
            cartOpen={cartOpen}
            onClose={() => setCartOpen(false)}
          />}
        />
        <Route
          path='/purchases'
          element={<Purchases
            cartOpen={cartOpen}
            onClose={() => setCartOpen(false)}
          />}
        />
        <Route
          path='/'
          element={<Navigate to='/flowers' replace />}
        />
      </Routes>
    </>


    // </CurrentUserContext.Provider>
  );
}

export default App;
