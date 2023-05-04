import classes from './Card.module.css';

const Card = ({ flower, name, link, price, onAddToCart, onDeleteFromCart, isAddedFlowers }) => {

  const handleAddlower = () => {
    onAddToCart(flower)
  }

  const handleDeleteFlower = () => {
    onDeleteFromCart(flower)
  }

  return (
    <div className={classes.card} >
      <div className={classes.heart}></div>
      <img className={classes.img} src={link} alt={`${name}`} />
      <h3 className={classes.title}>{name}</h3>
      <div className={classes.wrapper}>
        <div className={classes.priceContainer}>
          <span className={classes.price}>Цена:</span>
          <span className={classes.title}>{price}</span>
        </div>
        {
          isAddedFlowers(flower) ?
            <button className={`${classes.mark} ${classes.mark_active}`} onClick={handleDeleteFlower}></button> :
            <button className={`${classes.mark}`} onClick={handleAddlower}></button>
        }
      </div>
    </div>
  )
}

export default Card;
