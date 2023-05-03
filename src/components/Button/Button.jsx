import classes from './Button.module.css';

const Button = ({ buttonText }) => {

  return (
    <button
      className={classes.button}
      type='button'>
      {buttonText}
    </button>
  )
}

export default Button;
