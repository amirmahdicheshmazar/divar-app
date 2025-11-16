import React from 'react';

// utils => number
import { sp } from '../../utils/number'

// style
import styles from './Main.module.css'

const Main = ({posts}) => {
    console.log(posts)

    const baseURL = 'http://localhost:3400/';

    return (
        <div className={styles.container} >
            {
                posts.data.posts.map((post) => (
                    <div key={post._id} className={styles.card} >
                        <div className={styles.info} >
                            <p>{post.options.title}</p>
                            <div>
                                <p>{sp(post.amount)} تومان</p>
                                <span>{post.options.city}</span>
                            </div>
                        </div>
                        <img src={`${baseURL}${post.images[0]}`} />
                    </div>
                ))
            }
        </div>
    );
};

export default Main;