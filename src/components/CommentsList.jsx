import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentsList = () => {
    const { article_id } = useParams();
    const [commentsData, setCommentsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then(({ data: { comments } }) => {
            setCommentsData(comments);
            setLoading(false);
        });
    }, []);

    if (loading) return <h2>Loading comments...</h2>;

    return (
        <>
            <section className="CommentsList">
                <h3>Comments</h3>
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
