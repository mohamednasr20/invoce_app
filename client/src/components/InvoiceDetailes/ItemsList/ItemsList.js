import React from 'react';
import ItemGrid from './ItemGrid/ItemGrid';
import ItemsListHeader from './ItemsListHeader/ItemsListHeader';
import TotalFooter from './TotalFooter/TotalFooter';
import useStyles from './styles';

const ItemsList = ({ items, total }) => {
  const classes = useStyles();

  const itemsBody = items.map((item) => (
    <ItemGrid item={item} key={item._id} />
  ));

  return (
    <div className={classes.root}>
      <ItemsListHeader />
      {itemsBody}
      <TotalFooter total={total} />
    </div>
  );
};

export default ItemsList;
