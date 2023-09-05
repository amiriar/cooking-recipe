import React, { useEffect, useState } from 'react';
import styles from './CategoriesPage.module.css'
import { useRouter } from 'next/router';
import Card from '../modules/Card'
const CategoriesPage = ({data}) => {
    const router = useRouter();

    const [query,setQuery] = useState({difficulty:"", time:""});

    useEffect(() => {
        const {difficulty,time} = router.query
        if(query.difficulty !== difficulty || query.time !== time)
        {
            setQuery({difficulty,time})
        }
    }, [])

    const changeHandler = (e) => {
        setQuery({...query, [e.target.name]: e.target.value})
    }

    const searchHandler = () => {
        router.push({pathname: "/categories", query})
    }

    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.subcontainer}>
                <div className={styles.select}>
                    <select value={query.difficulty} name='difficulty' onChange={changeHandler}>
                        <option value="">Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <select value={query.time} name='time' onChange={changeHandler}>
                        <option value="">Cooking Time</option>
                        <option value="more">More Than  30min</option>
                        <option value="less">Less Than  30min</option>
                    </select>
                    <button onClick={searchHandler}>Search</button>
                </div>
                <div className={styles.cards}>
                    {!data.length ? <img src='images/search.png' /> : null}
                    {data.map((food) => (
                        <div key={food.id}><Card  {...food} /></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;