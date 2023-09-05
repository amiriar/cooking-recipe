import React from 'react';
import styles from './Banner.module.css'
import Link from 'next/link';
const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>amirFood</h2>
                <p>The best food in town</p><br />
                <span>
                    amirfood is online food delivery and recepie and i hope you like it
                </span>
                <Link href={'/menu'}>See All</Link>
            </div>
            <div className={styles.right}>
                <img src='images/banner.png' alt='' />
            </div>
        </div>
    );
};

export default Banner;