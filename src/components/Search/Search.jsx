import classes from './Search.module.css';

const Search = () => {
  return (
    <input
      className={classes.search}
      type='search'
      placeholder='Поиск...' />
  );
}

export default Search;
