import { useContext } from "react";
import Byline from "./Byline";
import Votes from "./Votes";
import { UserContext } from "../contexts/User";

const CommentCard = ({ comment }) => {
    const { user } = useContext(UserContext);

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
                <div className="CommentCard__bottomLine">
                    <Votes
                        id={comment.comment_id}
                        votes={comment.votes}
                        voteType={"comment"}
                    ></Votes>
                    {user === comment.author && <button>Delete</button>}
                </div>
            </section>
        </>
    );
};

export default CommentCard;
