import React, { useEffect} from 'react'

export default function ProductsDetils() {
    const getProducts = async ()=>{
        const {data} = await axios.get(`https://dummyjson.com/products/1`);
        console.log(data);   

    }
    useEffect(()=>{
        getProducts();
    },[])

  return (
    <>
      
      
      
    </>
  )
}
