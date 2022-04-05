import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'


const ItemCount = ({stock}) => {

    const [count, setCount] = useState(0);

    const adding = () => {
        if(count < stock){
            setCount(count + 1);
        };
        
    };

    const subs = () =>{
        if(count > 0){
            setCount(count - 1);
        };
        
    };

    const onAdd = () =>{
        alert('estos ' + count + ' se enviara a tu carrito');
    };


  return (
    <div className='botones'>
        <Button onClick={subs} variant="danger"> - </Button>        
        <p> {count} </p>
        <Button onClick={adding} variant="success"> + </Button>
        <Button className='comprar' onClick={onAdd} variant="primary">Comprar</Button>
    </div>
  )
}

export default ItemCount