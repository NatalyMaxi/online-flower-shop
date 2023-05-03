import Card from '../Card/Card';
import Title from '../Title/Title';
import classes from './Basket.module.css';
import cart from '../../images/cart.jpg';
import payment from '../../images/payment.png';
import Button from '../Button/Button';

const Basket = ({ number }) => {

  return (
    <div className={classes.basket}>
      {/* <div className={classes.container}>
        <Title
          title='Корзина'
        />
        <div className={classes.grid}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div> */}

{/*
      <div className={classes.wrapper}>
        <img className={classes.img} src={cart} alt='Корзина' />
        <h3 className={classes.title}>Корзина пустая</h3>
        <Button/>
      </div> */}

      <div className={classes.wrapper}>
        <img className={classes.img} src={payment} alt='Корзина' />
        <h3 className={classes.title}>Заказ оформлен!</h3>
        <p className={classes.text}>{`Ваш заказ № ${number} скоро будет передан курьерской доставке`}</p>
        <Button/>
      </div>
    </div>
  )
}

export default Basket;
