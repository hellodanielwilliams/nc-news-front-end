import Byline from "./Byline";
import Votes from "./Votes";

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
                <Votes
                    id={comment.comment_id}
                    votes={comment.votes}
                    voteType={"comment"}
                ></Votes>
            </section>
        </>
    );
};

export default CommentCard;
