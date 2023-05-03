// import Title from '../Title/Title';
import Button from '../Button/Button';
import classes from './Purchases.module.css';
import smail from '../../images/smile.png'

const Purchases = () => {

  return (
    <div className={classes.purchases}>
      <div className={classes.wrapper}>
        <img className={classes.img} src={smail} alt='Печальный смайлик' />
        <h2 className={classes.title}>Покупок нет</h2>
        <p className={classes.text}>Вы ничего не покупали</p>
        <Button />
      </div>
      {/* <Title
      title='Мои покупки'
      /> */}
    </div>
  )
}

export default Purchases;
