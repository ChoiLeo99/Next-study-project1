import type { Metadata, ResolvingMetadata } from 'next';
import React from 'react';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `제품의 이름: ${slug}`,
    description: `${slug} 제품의 상세 설명 페이지입니다.`,
    icons: {
      icon: '/favicon.ico'
    }
  };
}

export default async function PantsPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      <header>
        <a href="">남성복</a>
        <a href="">여성복</a>
      </header>
      <h1>{slug} 제품 설명 페이지</h1>
    </div>
  );
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
