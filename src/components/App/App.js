import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Favourites from '../Favourites/Favourites';
import Purchases from '../Purchases/Purchases';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false)

  const handleCartOpenClick = () => {
    setCartOpen(true)
  }

  return (
    // <CurrentUserContext.Provider >
    <>
      <Header
        onOpenCart={handleCartOpenClick}
      />
      <Routes>
        <Route
          path='/flowers'
          element={<Main
            cartOpen={cartOpen}
            onClose={() => setCartOpen(false)}
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
