import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink
        NavLink to='/flowers'
      >
        <Logo />
      </NavLink>
      <Nav />
    </div>
  );
}

export default Header;
