import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import classes from './Header.module.css';

const Header = ({ onOpenCart }) => {

  return (
    <div className={classes.header}>
      <NavLink
        to='/flowers'
      >
        <Logo />
      </NavLink>
      <Nav
        onOpenCart={onOpenCart}
      />
    </div>
  );
}

export default Header;
