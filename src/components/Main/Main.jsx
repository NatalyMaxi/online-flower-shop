import Title from '../Title/Title';
import Grid from '../Grid/Grid';
import classes from './Main.module.css';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';

const Main = ({ cartOpen, onClose }) => {

  return (
    <main className={classes.content}>
      <div className={classes.wrapper}>
        <Title title='Комнатные растения' />
        <Search />
      </div>
      <Grid />
      <Cart
        onClose={onClose}
        cartOpen={cartOpen}
      />
    </main>
  );
}

export default Main;
