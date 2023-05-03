import classes from './Logo.module.css';
import logo from '../../images/logotype.png'

const Logo = () => {
  return (
    <img
      className={classes.logo}
      src={logo}
      alt='Логотип' />
  );
}

export default Logo;
