import React, {useState}from 'react'
import Button from '../../Companents/Buttons/Button'
import axios from 'axios'
import ProductCard from '../../Companents/Cards/ProductCard';

const Home = () => {
const [orders,setOrders]=useState([]);

const getOrders = () => {
axios.get('https://northwind.vercel.app/api/orders')
.then(res => {
    console.log(res);
    setOrders(res.data)
})
};

  return (
   <div>
    {orders.map(item => <ProductCard item={item} />)}
    
    <Button text="Click Me" onclick={getOrders}    />
    </div>
  );
};

export default Home