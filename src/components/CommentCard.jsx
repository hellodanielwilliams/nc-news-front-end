import Byline from "./Byline";

const CommentCard = ({ comment }) => {
    return (
        <>
            <section className="CommentCard">
                <Byline
                    username={comment.author}
                    date={comment.created_at}
                ></Byline>
                <div className="CommentCard__body">
                    <p>{comment.body}</p>
                </div>
            </section>
        </>
    );
};

export default CommentCard;
