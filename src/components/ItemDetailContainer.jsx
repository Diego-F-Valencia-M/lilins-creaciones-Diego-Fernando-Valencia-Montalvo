import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { traerProducto } from './productos'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect( () => {
        traerProducto()
            .then((res)=>{
                console.log(res);
            });
    }, []);

  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer