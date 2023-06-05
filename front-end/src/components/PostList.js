import PostItem from './PostItem';

const PostList = ({postList}) => {
    return (
        <div>
        {
            postList.map((e,idx)=> (<PostItem post={e} key={idx}/>))
        }
        </div>
    );
};

export default PostList;