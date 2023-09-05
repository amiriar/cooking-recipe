import React from 'react';
import styles from './MenuPage.module.css'
import Card from '../modules/Card';
const MenuPage = ({data}) => {
    return (
    <div className={styles.container}>
        <h2>Menu</h2>
        <div className={styles.subContainer}>
            {data.map((food) => (
                <div key={food.id}><Card  {...food} /></div>
            ))}
        </div>
    </div>
    );
};

export default MenuPage;

