import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from './Products.module.css'

export default function Products() {
  const [product,setproduct] = useState([]);
    const getProduct = async ()=>{
          const {data} = await axios.get(`https://dummyjson.com/products`);
          const ruselt = data.products;
          setproduct(ruselt);
          
    }
  useEffect(()=>{
    getProduct();
  },[])
  return (
    <>
    <div className="container">
      <div className="row">
        {product.map( pro=>
        <div className="card col-lg-3">
          <h2>{pro.title.split(" ").slice(0,1).join(" ")}</h2>
          <img src={pro.thumbnail} className={`${style.img}`} />
          <div className="card-footer">
            <Link className="btn btn-outline-dark" to={`/detils/${pro.id}`} >details</Link>
          </div>

        </div>

        )}
      </div>
    </div>
      
    </>
  )
}
