import classes from './Button.module.css';

const Button = () => {

  return (
    <button
      className={classes.button}
      type='button'>
      <span>&larr;</span>
      Вернуться назад
    </button>
  )
}

export default Button;
