import Title from '../Title/Title';
import Grid from '../Grid/Grid';
import classes from './Main.module.css';
import Search from '../Search/Search';

const Main = () => {
  return (
    <main className={classes.content}>
      <div className={classes.wrapper}>
        <Title title='Комнатные растения' />
        <Search/>
      </div>
      <Grid />
    </main>
  );
}

export default Main;
