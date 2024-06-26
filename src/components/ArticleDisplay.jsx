import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import UserDetails from "./UserDetails";
import Byline from "./Byline";
import CommentsList from "./CommentsList";
import Votes from "./Votes";
import TopicBar from "./TopicBar";
import ErrorNotFound from "./ErrorNotFound";

const ArticleDisplay = () => {
    const { article_id } = useParams();
    const [articleData, setArticleData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchArticleById(article_id)
            .then(({ data: { article } }) => {
                setIsError(false);
                setArticleData(article);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
            });
    }, [article_id]);

    return (
        <>
            {isError && <ErrorNotFound type="article" />}
            {!isError && (
                <>
                    <TopicBar topic_name={articleData.topic} />
                    {isLoading && <h3>Loading article...</h3>}
                    <article className="ArticleDisplay">
                        <Byline
                            username={articleData.author}
                            date={articleData.created_at}
                            topic={articleData.topic}
                        ></Byline>
                        <div className="ArticleDisplay__title">
                            <h2>{articleData.title}</h2>
                        </div>
                        <div className="ArticleDisplay__image">
                            <img src={articleData.article_img_url}></img>
                        </div>
                        <div className="ArticleDisplay__body">
                            <p>{articleData.body}</p>
                        </div>
                    </article>
                    <Votes
                        id={articleData.article_id}
                        votes={articleData.votes}
                        voteType={"article"}
                    ></Votes>
                    <section>
                        <CommentsList></CommentsList>
                    </section>
                </>
            )}
        </>
    );
};

export default ArticleDisplay;
