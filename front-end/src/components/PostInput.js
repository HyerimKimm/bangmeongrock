import React, { useState } from 'react';
import { createNewPost } from '../services/postLIstService';

const PostInput = ({getPostList}) => {
    const [name, setName] = useState('');
    const [contents, setContents] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeContent = (e) => {
        setContents(e.target.value);
    }

    const onBtnClick = async (e) => {
        e.preventDefault();
        const body = {
            author: name,
            content:contents
        };
        await console.log(createNewPost(body));
        getPostList();
    }

    return (
        <div>
            <form>
            <section>
                <div>
                    이름 : <input onChange={onChangeName} value={name} placeholder='이름을 입력하세요'/>
                </div>
                <div>
                    내용 : <textarea onChange={onChangeContent} value={contents} placeholder='내용을 입력하세요'/>
                </div>
            </section>
            <button type='submit' onClick={onBtnClick}>등록하기</button>
            </form>
        </div>
    );
};

export default PostInput;