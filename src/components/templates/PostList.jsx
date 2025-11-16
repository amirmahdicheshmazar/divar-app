import { useQuery } from '@tanstack/react-query';
import React from 'react';

// services => user => getPost
import { getPost } from '../../services/user';

// Loader
import Loader from '../templates/modules/Loader'

// utils => function of numbers
import { sp } from '../../utils/number';

// styles
import styles from "./PostList.module.css"


const PostList = () => {

    const baseURL = 'http://localhost:3400/';

    const {data,isLoading} = useQuery(['my-post-list'],getPost)
    console.log(data)

    return (
        <div className={styles.list} >
            {isLoading ? <Loader/> : (
                <>
                    <h3>آگهی های شما</h3>
                    {
                        data.data.posts.map((post) => (
                            <div className={styles.post} key={post._id} >
                                <img src={`${baseURL}${post.images[0]}`} />
                                <div>
                                    <p>{post.options.title}</p>
                                    <span>{post.options.content}</span>
                                </div>
                                <div className={styles.price} >
                                    <p>{new Date(post.createdAt).toLocaleDateString('fa-IR')}</p>
                                    <span>{sp(post.amount)} تومان</span>
                                </div>
                            </div>
                        ))
                    }
                </>
            )}
        </div>
    );
};

export default PostList;