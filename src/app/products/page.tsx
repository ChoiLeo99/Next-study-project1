import { getProducts } from '@/service/products';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '../../../public/images/clothes.jpg'

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // next: { revalidate: 0 },
    // cache: 'no-store',
  })
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt='Clothes' />
      <ul>
        {products.map((index) => (
          <li key={index.id}>
            <Link href={`/products/${index.id}`}>{index.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle></MeowArticle>
    </>
  );
}
