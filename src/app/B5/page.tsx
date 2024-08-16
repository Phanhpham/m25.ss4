import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>page
              <Link  href={"/B5/home"}>Home </Link>
              <Link  href={"/B5/about"}>About</Link>
              <Link  href={"/B5/contact"}>Contact</Link>
              <Link  href={"/B5/login"}>Login</Link>
             
    </div>
  )
}
