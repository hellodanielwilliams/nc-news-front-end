import Byline from "./Byline";

const CommentCard = ({ comment }) => {
    return (
        <>
            <Byline
                username={comment.author}
                date={comment.created_at}
            ></Byline>
            <p>{comment.body}</p>
        </>
    );
};

export default CommentCard;
