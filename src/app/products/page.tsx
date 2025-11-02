import Link from 'next/link'
import React from 'react'

const products = ['shirt', 'pants', 'skirt', 'shoes']

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((products, index) => <li key={index}>
          <Link href={`products/${products}`}>{products}
          </Link>
        </li>)}
      </ul>
    </>
  )
}
