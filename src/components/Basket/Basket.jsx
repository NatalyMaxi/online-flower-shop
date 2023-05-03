import Card from '../Card/Card';
import Title from '../Title/Title';
import classes from './Basket.module.css';
import cart from '../../images/cart.jpg';
import payment from '../../images/payment.png';
import Button from '../Button/Button';
import SmallCard from '../SmallCard/SmallCard';

const Basket = ({ number }) => {

  return (
    <div className={classes.basket}>
      <div className={classes.container}>
        <Title
          title='Корзина'
        />

        {/* <div className={classes.box}>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
        <div className={classes.totalPrice}>
          <span>Итого:</span>
          <div className={classes.line}></div>
          <span>сумма</span>
        </div>
        <Button
          buttonText='Оформить заказ'
        /> */}

        {/* <div className={classes.wrapper}>
          <img className={classes.img} src={cart} alt='Корзина' />
          <h3 className={classes.title}>Корзина пустая</h3>
          <Button
            buttonText='Вернуться назад'
          />
        </div> */}


        <div className={classes.wrapper}>
          <img className={classes.img} src={payment} alt='Корзина' />
          <h3 className={classes.title}>Заказ оформлен!</h3>
          <p className={classes.text}>{`Ваш заказ № ${number} скоро будет передан курьерской доставке`}</p>
          <Button
            buttonText='Вернуться назад' />
        </div>

      </div>
    </div>
  )
}

export default Basket;
