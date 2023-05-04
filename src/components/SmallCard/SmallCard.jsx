import classes from './SmallCard.module.css';

const SmallCard = ({ name, link, price, onDeleteFromCart }) => {

  // const handleDeleteFlower = () => {
  //   onDeleteFromCart(flower.flowerId)
  // }

  return (
    <div className={classes.card}>
      <img className={classes.img} src={link} alt={`${name}`} />
      <div className={classes.priceContainer}>
        <h4 className={classes.title}>{name}</h4>
        <span className={classes.price}>{`Цена: ${price}`}</span>

      </div>
      <button
        className={classes.button}
        onClick={onDeleteFromCart}
        type='button'>
        &times;
      </button>
    </div>
  )
}

export default SmallCard;
