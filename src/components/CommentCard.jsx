import { useContext, useState } from "react";
import Byline from "./Byline";
import Votes from "./Votes";
import { UserContext } from "../contexts/User";
import { deleteCommentByCommentId } from "../utils/api";

const CommentCard = ({ comment, setCommentDeleted }) => {
    const { user } = useContext(UserContext);
    const [isDeleteClicked, setIsDeleteClicked] = useState(false);

    const handleDelete = () => {
        setIsDeleteClicked(true);
        deleteCommentByCommentId(comment.comment_id).then(() => {
            setCommentDeleted(comment.comment_id);
        });
    };

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
                    {user === comment.author && (
                        <button
                            onClick={() => {
                                handleDelete();
                            }}
                            disabled={isDeleteClicked}
                        >
                            {isDeleteClicked ? `Deleting...` : `Delete`}
                        </button>
                    )}
                </div>
            </section>
        </>
    );
};

export default CommentCard;
