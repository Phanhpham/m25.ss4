import React from "react";
export default function page(props: any) {
  const { params } = props;
  return <div>page id sapham la : {params.idProduct}</div>;
}
