import React from 'react';
import styles from './Layout.module.css'
import Link from 'next/link';

const Layout = ({children}) => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href={'/'}>amirFood</Link>
            </div>
            <div className={styles.right}>
                <Link href={'/menu'}>Menu</Link>
                <Link href={'/categories'}>Categories</Link>
            </div>
        </header>
        <div className={styles.container}>{children}</div>
        <footer className={styles.footer}>
            inja amirfoode ! | ghaza bezan lezat bebar
        </footer>
        </>
    );
};

export default Layout;