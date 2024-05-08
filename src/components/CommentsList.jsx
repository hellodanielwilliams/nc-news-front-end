import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const CommentsList = () => {
    const { article_id } = useParams();
    const [commentsData, setCommentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [commentExpanded, setCommentExpanded] = useState(false);
    const [commentPosted, setCommentPosted] = useState(null);

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then(({ data: { comments } }) => {
            setCommentsData(comments);
            setLoading(false);
        });
    }, [commentPosted]);

    if (loading) return <h2>Loading comments...</h2>;

    return (
        <>
            <section className="CommentsList">
                <div className="CommentsList__topLine">
                    <h3>Comments</h3>
                    <div className="CommentsList__buttonsBox">
                        <button
                            className={
                                commentExpanded
                                    ? "CommentsList-hidden"
                                    : "CommentsList-visible"
                            }
                            onClick={() => {
                                setCommentExpanded(true);
                            }}
                        >
                            ➕
                        </button>
                        <button
                            className={
                                commentExpanded
                                    ? "CommentsList-visible"
                                    : "CommentsList-hidden"
                            }
                            onClick={() => {
                                setCommentExpanded(false);
                            }}
                        >
                            ➖
                        </button>
                    </div>
                </div>
                <div
                    className={
                        commentExpanded
                            ? "CommentsList-visible"
                            : "CommentsList-hidden"
                    }
                >
                    <CommentForm
                        setCommentExpanded={setCommentExpanded}
                        setCommentPosted={setCommentPosted}
                    ></CommentForm>
                </div>
                {commentsData.map((comment) => {
                    return (
                        <CommentCard
                            comment={comment}
                            key={`c_${comment.comment_id}`}
                        />
                    );
                })}
            </section>
        </>
    );
};

export default CommentsList;
