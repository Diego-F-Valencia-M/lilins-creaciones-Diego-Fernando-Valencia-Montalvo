import React, { useEffect, useState } from 'react'
import promesas from './promesas';
import ItemList from './ItemList';
import productos from './productos';


const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    promesas(3000, productos)
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error));
  }, [items]);

  return (
    <div>
        <ItemList productos={items} />
    </div>
  )
}

export default ItemListContainer