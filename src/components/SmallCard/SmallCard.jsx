import classes from './SmallCard.module.css';

const SmallCard = ({ price }) => {
  return (
    <div className={classes.card}>
      <img className={classes.img} src='https://cdn1.ozone.ru/s3/multimedia-u/6020702730.jpg' alt='Цветок' />
      <div className={classes.priceContainer}>
        <h4 className={classes.title}>Цветок цветок Цветок цветок Цветок цветок Цветок цветок Цветок цветок</h4>
        <span className={classes.price}>{`Цена: ${price}`}</span>

      </div>
      <button className={classes.button} type='button'>&times;</button>
    </div>
  )
}

export default SmallCard;
