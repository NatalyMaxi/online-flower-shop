import Title from '../Title/Title';
import Grid from '../Grid/Grid';
import classes from './Main.module.css';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import Card from '../Card/Card';

const Main = ({ cartOpen, onClose, items, addedToCart, onAddToCart, onDeleteFromCart, isAddedFlowers }) => {

  return (
    <main className={classes.content}>
      <div className={classes.wrapper}>
        <Title title='Комнатные растения' />
        <Search />
      </div>
      <Grid>
        {
          items.map((item) => {
            return <Card
              key={item.flowerId}
              flowerId={item.flowerId}
              flower={item}
              name={item.name}
              link={item.link}
              price={item.price}
              onAddToCart={() => {
                onAddToCart(item)
              }}
              onDeleteFromCart={() => {
                onDeleteFromCart(item)
              }}
              isAddedFlowers={isAddedFlowers}
            />
          })
        }
      </Grid>
      <Cart
        onClose={onClose}
        cartOpen={cartOpen}
        addedToCart={addedToCart}
        onDeleteFromCart={onDeleteFromCart}
      />
    </main>
  );
}

export default Main;
