import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { useParams } from "react-router-dom";
import { postCommentByArticleId } from "../utils/api";

const CommentForm = ({ setCommentExpanded, setCommentPosted }) => {
    const { user } = useContext(UserContext);
    const { article_id } = useParams();
    const [newCommentBody, setNewCommentBody] = useState("");
    const [isSubmittable, setIsSubmittable] = useState(false);
    const [isCommentError, setIsCommentError] = useState(false);

    const handleInput = (e) => {
        const inputText = e.target.value;
        setNewCommentBody(inputText);
        setIsSubmittable(inputText.length > 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCommentBody.length > 0) {
            const req = {
                username: user,
                body: newCommentBody,
            };
            setIsSubmittable(false);
            postCommentByArticleId(article_id, req)
                .then((response) => {
                    setNewCommentBody("");
                    setCommentExpanded(false);
                    setCommentPosted(response);
                    setIsCommentError(false);
                })
                .catch((err) => {
                    setIsSubmittable(true);
                    setIsCommentError(true);
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="CommentForm">
                <textarea
                    value={newCommentBody}
                    onChange={handleInput}
                    placeholder="Write a comment..."
                    rows="4"
                    required
                />
                <div className="CommentForm__submit">
                    <button type="submit" disabled={!isSubmittable}>
                        Post
                    </button>
                </div>
                <p
                    className={
                        isCommentError
                            ? "CommentForm__error-true"
                            : "CommentForm__error-false"
                    }
                >
                    Problem with posting comment, please try again later.
                </p>
            </form>
        </>
    );
};

export default CommentForm;
