import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import cart from '../../images/cart.svg';
import heart from '../../images/heart.svg';
import bookmarks from '../../images/bookmarks.svg';

const Nav = ({ onOpenCart, totalPrice = 0 }) => {

  return (
    <nav className={classes.nav}>
      <nav className={classes.nav}>
        <ul className={classes.nav__items}>
          <li className={classes.nav__item}>
            <div className={classes.wrapper} onClick={onOpenCart}>
              <img className={classes.nav__img} src={cart} alt='Корзина' /> <span>{totalPrice}</span>
            </div>
          </li>
          <li className={classes.nav__item}>
            <NavLink to='/favourites'
              className={navData => navData.isActive ? `${classes.nav__link} ${classes.nav__link_active}` : classes.nav__link}
            >
              <div className={classes.wrapper}>
                <img className={classes.nav__img} src={heart} alt='Мои покупки' />
              </div>
            </NavLink>

          </li>
          <li className={classes.nav__item}>
            <NavLink to='/purchases'
              className={navData => navData.isActive ? `${classes.nav__link} ${classes.nav__link_active}` : classes.nav__link}
            >
              <div className={classes.wrapper}>
                <img className={classes.nav__img} src={bookmarks} alt='Избранное' />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default Nav;
