import React from 'react'

export default async function PantsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  console.log("서버에서 받은 경로 위치:" ,slug)
  return <h1>{slug} 제품 설명 페이지</h1>
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(products => ({
    slug: products,
  }))
}