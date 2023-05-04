import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import Button from '../Button/Button';
import classes from './Purchases.module.css';
import smail from '../../images/smile.png';
import Cart from '../Cart/Cart';

const Purchases = ({ onClose, cartOpen }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.purchases}>
      <Title
        title='Мои покупки'
      />
      <div className={classes.wrapper}>
        <img className={classes.img} src={smail} alt='Печальный смайлик' />
        <h2 className={classes.title}>Покупок нет</h2>
        <p className={classes.text}>Вы ничего не покупали</p>
        <Button
          buttonText='В магазин'
          type='button'
          onClick={() => {
            navigate('/flowers')
          }}
        />
        <Cart onClose={onClose} cartOpen={cartOpen} />
      </div>
    </div>
  )
}

export default Purchases;
