import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>menu thanh dieu huong 
        
        <Link href={"/navigation1/about"}>about</Link>
        <Link href={"/navigation1/news"}>news</Link>
        
    </div>
  )
}
