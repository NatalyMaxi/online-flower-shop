import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Title from '../Title/Title';
import classes from './Cart.module.css';
import cart from '../../images/cart.jpg';
import payment from '../../images/payment.png';
import Button from '../Button/Button';
import SmallCard from '../SmallCard/SmallCard';

const Cart = ({ number, cartOpen, onClose, addedToCart = [], onDeleteFromCart, totalPrice = 0 }) => {
  const navigate = useNavigate();
  const [orderBeenPlaced, setOderBeenPlaced] = useState(false)

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
        {
          addedToCart.length > 0 ? (
            <>
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
                <span>{totalPrice} рублей</span>
              </div>
              <Button
                buttonText='Оформить заказ'
                onClick={onClose}
              />
            </>

          ) : (
            <div className={classes.wrapper}>
              <img className={classes.img} src={orderBeenPlaced ? payment : cart} alt='Корзина' />
              <h3 className={classes.title}>{orderBeenPlaced ? 'Заказ оформлен!' : 'Корзина пустая!'}</h3>
              {
                orderBeenPlaced && <p className={classes.text}>{`Ваш заказ № ${number} скоро будет передан курьерской доставке`}</p>
              }
              <Button
                buttonText='В магазин'
                type='button'
                onClick={() => {
                  onClose()
                  navigate('/flowers')
                }}
              />
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Cart;
