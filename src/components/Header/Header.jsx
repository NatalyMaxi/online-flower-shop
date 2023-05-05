import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import classes from './Header.module.css';

const Header = ({ onOpenCart, totalPrice }) => {

  return (
    <div className={classes.header}>
      <NavLink
        to='/flowers'
      >
        <Logo />
      </NavLink>
      <Nav
        onOpenCart={onOpenCart}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default Header;
