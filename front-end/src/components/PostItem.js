import React from 'react';

const PostItem = ({post}) => {
    console.log(post)
    return (
        <div>
            <div>이름 : {post.author}</div>
            <div>{post.addDate}</div>
            <div>{post.content}</div>
        </div>
    );
};

export default PostItem;