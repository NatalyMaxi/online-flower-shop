import { Route, Routes, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Basket from '../Basket/Basket';
import Favourites from '../Favourites/Favourites';
import Purchases from '../Purchases/Purchases';

const App = () => {
  return (
    // <CurrentUserContext.Provider >
    <>
      <Header />
      <Routes>
        <Route
          path='/flowers'
          element={<Main />}
        />
        <Route
          path='basket'
          element={<Basket />}
        />
        <Route
          path='/favourites'
          element={<Favourites />}
        />
        <Route
          path='/purchases'
          element={<Purchases />}
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
