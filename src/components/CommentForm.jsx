import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { useParams } from "react-router-dom";
import { postCommentByArticleId } from "../utils/api";

const CommentForm = () => {
    const { user } = useContext(UserContext);
    const { article_id } = useParams();
    const [newCommentBody, setNewCommentBody] = useState("");

    const handleInput = (e) => {
        setNewCommentBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCommentBody.length !== 0) {
            const req = {
                username: user,
                body: newCommentBody,
            };
            postCommentByArticleId(article_id, req).then((response) => {
                console.log(response);
                setNewCommentBody("");
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
                    <button type="submit">Post</button>
                </div>
            </form>
        </>
    );
};

export default CommentForm;
