import classes from './Button.module.css';

const Button = ({ buttonText, type, onClick }) => {

  return (
    <button
      className={classes.button}
      type={type}
      onClick={onClick}
    >
      {buttonText}
      <span className={classes.span}>&rarr;</span>
    </button>
  )
}

export default Button;
