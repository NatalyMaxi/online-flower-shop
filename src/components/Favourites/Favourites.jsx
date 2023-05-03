// import Title from '../Title/Title';
import Button from '../Button/Button';
import classes from './Favourites.module.css';
import smail from '../../images/sad-smile.png'

const Favourites = () => {

  return (
    <div className={classes.favourites}>
      <div className={classes.wrapper}>
        <img className={classes.img} src={smail} alt='Грустный смайлик' />
        <h2 className={classes.title}>Закладок нет</h2>
        <p className={classes.text}>Вы пока ничего не добавили в закладки</p>
        <Button
          buttonText='Вернуться назад'
        />
      </div>
      {/* <Title
        title='Мои закладки'
      /> */}
    </div>
  )
}

export default Favourites;
