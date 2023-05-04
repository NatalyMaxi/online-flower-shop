// import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import classes from './Cart.module.css';
// import cart from '../../images/cart.jpg';
// import payment from '../../images/payment.png';
import Button from '../Button/Button';
import SmallCard from '../SmallCard/SmallCard';

const Cart = ({ number, cartOpen, onClose, addedToCart, onDeleteFromCart }) => {
  // const navigate = useNavigate();
  // console.log(addedToCart)
  return (
    <div className={cartOpen ? `${classes.cart} ${classes.cart_open}` : `${classes.cart}`}>
      <div className={cartOpen ? `${classes.container} ${classes.container_open}` : `${classes.container}`}>
        <Title
          title='Корзина'
        />
        <button
          className={classes.button}
          onClick={onClose}
        >&times;</button>
        <div className={classes.box}>
          {
            addedToCart.map((item) => {
              return <SmallCard
                key={item.id}
                flower={item}
                flowerId={item.flowerId}
                name={item.name}
                link={item.link}
                price={item.price}
                onDeleteFromCart={onDeleteFromCart}
              />
            })
          }
        </div>
        <div className={classes.totalPrice}>
          <span>Итого:</span>
          <div className={classes.line}></div>
          <span>сумма</span>
        </div>
        <Button
          buttonText='Оформить заказ'
          onClick={onClose}
        />

        {/* <div className={classes.wrapper}>
          <img className={classes.img} src={cart} alt='Корзина' />
          <h3 className={classes.title}>Корзина пустая</h3>
          <Button
            buttonText='В магазин'
            type='button'
            onClick={() => {
              navigate('/flowers')
            }}
          />
        </div> */}

        {/* <div className={classes.wrapper}>
          <img className={classes.img} src={payment} alt='Корзина' />
          <h3 className={classes.title}>Заказ оформлен!</h3>
          <p className={classes.text}>{`Ваш заказ № ${number} скоро будет передан курьерской доставке`}</p>
          <Button
            buttonText='В магазин'
            type='button'
            onClick={() => {
              navigate('/flowers')
            }}
          />
        </div> */}

      </div>
    </div>
  )
}

export default Cart;
