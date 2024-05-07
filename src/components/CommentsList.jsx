import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const CommentsList = () => {
    const { article_id } = useParams();
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then(({ data: { comments } }) =>
            setCommentsData(comments)
        );
    });

    return (
        <>
            <h3>Comments</h3>
            {commentsData.map((comment) => {
                return <CommentCard comment={comment} />;
            })}
        </>
    );
};

export default CommentsList;
