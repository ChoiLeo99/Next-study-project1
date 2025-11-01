import styles from './layout.module.css';

// export const metadata = {
//     title: "Next.js 16 Example",
//     description: "Basic routing example with App Router",
// };

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav className={styles.nav}>
                <a href=''>여성옷</a>
                <a href=''>남성옷</a>
            </nav>
            <section className={styles.products}>
                {children}
            </section>
        </>
    );
}