import React from 'react';
import Card from '../Card/Card';
import classes from './Grid.module.css';

const Grid = ({ children}) => {

  return (
    <div className={classes.grid} >
      {/* {children} */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Grid;
