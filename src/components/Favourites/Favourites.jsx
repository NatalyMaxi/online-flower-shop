import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import Button from '../Button/Button';
import classes from './Favourites.module.css';
import smail from '../../images/sad-smile.png';
import Cart from '../Cart/Cart';

const Favourites = ({ onClose, cartOpen }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.favourites}>
      <Title
        title='Мои закладки'
      />
      <div className={classes.wrapper}>
        <img className={classes.img} src={smail} alt='Грустный смайлик' />
        <h2 className={classes.title}>Закладок нет</h2>
        <p className={classes.text}>Вы пока ничего не добавили в закладки</p>
        <Button
          buttonText='В магазин'
          type='button'
          onClick={() => {
            navigate('/flowers')
          }}
        />
        <Cart
          cartOpen={cartOpen}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default Favourites;
