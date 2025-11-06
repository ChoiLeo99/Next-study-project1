import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const revalidate = 3;

type Props = {
  params: Promise<{ slug: string }>; // ✅ Next.js 16에서는 Promise 형태임
};

// ✅ 제목 생성 (params는 Promise이므로 await 필요)
export async function generateMetadata({ params }: Props) {
  const { slug } = await params; // ✅ 꼭 await 해야 함
  const product = await getProduct(slug);

  return {
    title: product
      ? `${product.name} 제품 페이지`
      : '제품을 찾을 수 없습니다',
  };
}

// ✅ 제품 상세 페이지
export default async function ProductPage({ params }: Props) {
  const { slug } = await params; // ✅ Promise를 await 해야 id 접근 가능
  const product = await getProduct(slug); // ✅ 실제 product.json에서 해당 id 찾기

  if (!product) {
    notFound(); // 제품 없을 시 404 페이지로 이동
  }

  return (
    <h1>
      {product.name} 제품 설명 페이지
      <Image
        src={`/images/${product.image}`}
        alt={product.image}
        width='300'
        height="300"
      />
      {product.price} 제품 가격
    </h1>
  );
}

// ✅ 정적 경로 미리 생성 (SSG)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}