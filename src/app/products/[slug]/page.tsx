import React from 'react'

export default async function PantsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  console.log("서버에서 받은 경로 위치:", slug)
  return (
    <div>
      <header>
        <a href=''>남성복</a>
        <a href=''>여성복</a>
      </header>
      <h1> {slug} 제품 설명 페이지</h1>
    </div>
  );
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(products => ({
    slug: products,
  }))
}