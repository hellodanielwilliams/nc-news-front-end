import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicSelector = () => {
    const [topicsData, setTopicsData] = useState([]);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        getTopics().then(({ data: { topics } }) => {
            setTopicsData(topics);
        });
    }, []);

    const handleMenuToggle = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <>
            <h2 onClick={handleMenuToggle}>Topics</h2>
            {isMenuVisible && (
                <>
                    {topicsData.map((topic, index) => {
                        return (
                            <p key={index}>
                                <Link to={`/topics/${topic.slug}`}>
                                    {topic.slug}
                                </Link>
                            </p>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default TopicSelector;
