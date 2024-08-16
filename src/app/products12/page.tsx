"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Product() {
  const pathName = usePathname();
  console.log("gtri pathName:", pathName);

  return (
    <div>
      <Link className={pathName=="/products12/menmen"?"active":""} href={"/products12/menmen"}>Menmen!! </Link>
      <Link className={pathName=="/products12/menmen"?"active":""} href={"/products12/iphone"}>iphone</Link>
    </div>
  );
}
