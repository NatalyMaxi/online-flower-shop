import classes from './Card.module.css';

const Card = ({price}) => {

  return (
    <div className={classes.card} >
      <div className={classes.heart}></div>
      <img className={classes.img} src='https://cdn1.ozone.ru/s3/multimedia-u/6020702730.jpg' alt='Цветок'/>
      <h3 className={classes.title}>Цветок цветок цветок веток цветок цветок веток цветок цветокветок цветок цветок</h3>
      <div className={classes.wrapper}>
        <div className={classes.priceContainer}>
          <span className={classes.price}>Цена:</span>
          <span className={classes.title}>5000</span>
        </div>
        <button className={classes.mark}></button>
      </div>
    </div>

    // <div className={classes.card} >
    //   <img className={classes.img} src='https://cdn1.ozone.ru/s3/multimedia-u/6020702730.jpg' alt='Цветок' />
    //   <h3 className={classes.title}>Цветок цветок цветок веток цветок цветок веток цветок цветокветок цветок цветок</h3>
    //   <div className={classes.wrapper}>
    //     <div className={classes.priceContainer}>
    //       <span className={classes.price}>Цена:</span>
    //       <span className={classes.title}>5000</span>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Card;
