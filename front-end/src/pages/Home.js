import React, { useEffect, useState } from 'react';
import PostInput from '../components/PostInput';
import PostList from '../components/PostList';
import getWholePost from '../services/postLIstService';

const Home = () => {
    const [postList, setPostList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getPostList = async () => {
        setIsLoaded(false);
        const newPostList = await getWholePost();
        setPostList(newPostList);
        setIsLoaded(true);
    }

    useEffect(()=>{
        getPostList();
    },[]);

    return (
        <div>
            <PostInput getPostList={getPostList}></PostInput>
            {
                !isLoaded
                ?<img src={require('../assets/images/loading.gif')}/>
                :<PostList postList={postList}></PostList>
            }
        </div>
    );
};

export default Home;