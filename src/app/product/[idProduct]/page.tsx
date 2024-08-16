"use client";
import React from 'react'
interface Product {
    idProduct: string;
}
interface Props{
params:Product;
}
/**
 * 
component trong next js cos 2 loai
1: client component 
        chi chay dc trong moi truong window 
2: server component 
        chi chay dc trong moi truong server

mac dinh khi tao function thi no mac dinh la server component 
 */
export default function page(props: any) {
    console.log("gia tri props",props);
    // dungf destructing 
    const {params} = props;
  return (
    <div>Trang chi tiet spham
        id sapham la : {params.idProduct} </div>
  )
}
