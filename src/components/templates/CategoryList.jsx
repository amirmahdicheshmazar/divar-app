
// useQuery
import { useQuery } from '@tanstack/react-query';

import React from 'react';

// components
import Loader from "../templates/modules/Loader"

// styles
import styles from '../templates/CategoryList.module.css'

// services => admin => getCategoryList
import { getCategory } from '../../services/admin';

const CategoryList = () => {

    const {data,isLoading,error} = useQuery(["get-categories"],getCategory)
    console.log(data)

    return (
        <div className={styles.list} >
            {isLoading ? <Loader/> : (
                data.data.map(i =>
                <div key={i._id}>
                    <img src={`${i.icon}.svg`} />
                    <h5>{i.name}</h5>
                    <p>slug: {i.slug}</p>
                </div> )
            )}
        </div>
    );
};

export default CategoryList;